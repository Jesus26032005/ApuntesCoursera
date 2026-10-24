import matplotlib.pyplot as plt
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split
from sklearn.multiclass import OneVsOneClassifier, OneVsRestClassifier
from sklearn.preprocessing import OneHotEncoder, StandardScaler


# 1. Cargar y explorar los datos.
# Cada ejecución necesita Internet para descargar el CSV del laboratorio.
URL_DATOS = (
    "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/"
    "GkDzb7bWrtvGXdPOfk6CIg/Obesity-level-prediction-dataset.csv"
)
OBJETIVO = "NObeyesdad"
datos = pd.read_csv(URL_DATOS)

# En un script, head() y describe() necesitan print() para mostrar su resultado.
# info() ya imprime su propio resumen; print(datos.info()) mostraría además None.
print("Primeros registros:")
print(datos.head())
print("\nValores nulos por columna:")
print(datos.isnull().sum())
print("\nInformación de las columnas:")
datos.info()
print("\nResumen estadístico de las variables numéricas:")
print(datos.describe())

# Observamos cuántos registros hay por clase antes de entrenar.
# Los nombres de las categorías se conservan tal como aparecen en el CSV.
conteo_clases = datos[OBJETIVO].value_counts().sort_index()
print("\nCantidad de registros por clase:")
print(conteo_clases)
figura, eje = plt.subplots(figsize=(9, 5))
conteo_clases.plot.barh(ax=eje, color="steelblue")
eje.set_title("Distribución de los niveles de obesidad")
eje.set_xlabel("Cantidad de registros")
eje.set_ylabel("Categoría registrada")
plt.tight_layout()
plt.show()


# 2. Separar las entradas X de la variable objetivo y.
# X incluye las características de cada persona; y contiene su categoría.
# scikit-learn admite etiquetas de texto: no es necesario convertir y en enteros.
# Así conservamos nombres legibles al evaluar las predicciones.
X = datos.drop(columns=OBJETIVO)
y = datos[OBJETIVO]

# Separamos ANTES de aprender escalas o categorías para evitar que la prueba
# aporte información a la preparación del modelo (fuga de información).
# El 80 % se usa para entrenamiento y el 20 % para prueba.
# stratify=y mantiene aproximadamente la proporción de las clases.
# random_state=42 permite repetir la misma división.
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)


# 3. Preparar las columnas numéricas y categóricas.
# Seleccionamos todos los tipos numéricos, incluidos enteros y decimales.
# El resto de las columnas de entrada de este CSV son categorías de texto.
columnas_numericas = X_train.select_dtypes(include="number").columns.tolist()
columnas_categoricas = X_train.select_dtypes(exclude="number").columns.tolist()

# StandardScaler aplica z = (x - media) / desviación estándar.
# Esto pone las entradas numéricas en escalas comparables y ayuda a la
# optimización y a la regularización de la regresión logística.
# OneHotEncoder convierte las categorías en columnas indicadoras de 0 y 1.
# drop='first' deja una categoría como referencia por cada variable.
# handle_unknown='ignore' permite transformar categorías nuevas en prueba;
# se representan con ceros en las columnas de esa variable.
# ColumnTransformer aplica cada transformación a sus columnas correspondientes.
preparador = ColumnTransformer(
    transformers=[
        ("numericas", StandardScaler(), columnas_numericas),
        (
            "categoricas",
            OneHotEncoder(sparse_output=False, drop="first", handle_unknown="ignore"),
            columnas_categoricas,
        ),
    ]
)

# fit_transform() aprende los parámetros SOLO con entrenamiento.
# transform() utiliza esos mismos parámetros con prueba, sin reajustarlos.
X_train_preparado = preparador.fit_transform(X_train)
X_test_preparado = preparador.transform(X_test)
print(f"\nEntradas de entrenamiento preparadas: {X_train_preparado.shape}")
print(f"Entradas de prueba preparadas: {X_test_preparado.shape}")


# 4. Entrenar con la estrategia uno contra todos (OvA), también llamada OvR.
# Con k clases, se entrenan k clasificadores binarios: cada uno distingue
# una clase de todas las demás. Se elige la clase con mayor puntuación.
# Usamos un contenedor explícito para expresar la estrategia sin depender
# del antiguo parámetro multi_class de LogisticRegression.
# max_iter=1000 limita las iteraciones del optimizador de cada modelo binario.
modelo_ova = OneVsRestClassifier(LogisticRegression(max_iter=1000))
modelo_ova.fit(X_train_preparado, y_train)
y_pred_ova = modelo_ova.predict(X_test_preparado)


# 5. Entrenar con la estrategia uno contra uno (OvO).
# Con k clases se entrenan k * (k - 1) / 2 clasificadores, uno por pareja.
# Cada modelo binario utiliza solo los registros de sus dos clases.
# La predicción final combina los votos; las puntuaciones resuelven empates.
modelo_ovo = OneVsOneClassifier(LogisticRegression(max_iter=1000))
modelo_ovo.fit(X_train_preparado, y_train)
y_pred_ovo = modelo_ovo.predict(X_test_preparado)


# 6. Comparar ambos modelos utilizando exactamente los mismos datos de prueba.
# Exactitud: proporción de registros cuya clase fue predicha correctamente.
# No asumimos que una estrategia siempre es mejor: revisamos los resultados.
print(f"\nNúmero de clases: {len(modelo_ova.classes_)}")
print(f"Clasificadores binarios OvA: {len(modelo_ova.estimators_)}")
print(f"Clasificadores binarios OvO: {len(modelo_ovo.estimators_)}")
for nombre, predicciones in [
    ("Uno contra todos (OvA)", y_pred_ova),
    ("Uno contra uno (OvO)", y_pred_ovo),
]:
    print(f"\nEstrategia: {nombre}")
    print(f"Exactitud: {accuracy_score(y_test, predicciones):.2%}")
    print("Informe por clase:")
    print(classification_report(y_test, predicciones, zero_division=0))

# El informe usa los encabezados estándar de scikit-learn:
# precision: de los predichos como una clase, qué proporción pertenece a ella;
# recall: de los registros reales de una clase, qué proporción detectamos;
# f1-score: media armónica de precision y recall;
# support: número de registros reales de cada clase en prueba.
# zero_division=0 asigna 0 a las métricas sin denominador válido.
# Las medias macro dan el mismo peso a cada clase; las weighted ponderan
# por el número de registros. Revisarlas complementa la exactitud global.
