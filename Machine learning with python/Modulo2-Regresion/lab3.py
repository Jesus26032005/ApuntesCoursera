"""Laboratorio 3: clasificación de abandono de clientes con regresión logística.

Aunque se llama «regresión», la regresión logística se utiliza para clasificar.
Aquí estima la probabilidad de que un cliente abandone el servicio (churn).
"""

import matplotlib.pyplot as plt
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, log_loss
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler


# 1. Cargar los datos de los clientes.
# Cada ejecución necesita Internet para descargar este archivo CSV.
URL_DATOS = (
    "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/"
    "IBMDeveloperSkillsNetwork-ML0101EN-SkillsNetwork/"
    "labs/Module%203/data/ChurnData.csv"
)
datos = pd.read_csv(URL_DATOS)

# Conservamos las siete variables de entrada del laboratorio:
# tenure: antigüedad como cliente; age: edad; address: años en el domicilio;
# income: ingresos; ed: nivel educativo codificado; employ: años de empleo;
# equip: indicador de equipamiento según la codificación del conjunto de datos.
# churn es el objetivo: 0 = permanece en el servicio; 1 = lo abandona.
VARIABLES = ["tenure", "age", "address", "income", "ed", "employ", "equip"]
OBJETIVO = "churn"
datos_modelo = datos[VARIABLES + [OBJETIVO]].copy()
datos_modelo[OBJETIVO] = datos_modelo[OBJETIVO].astype(int)

print("Primeros registros de los datos seleccionados:")
print(datos_modelo.head())
print("\nCantidad de clientes por clase (0 = permanece, 1 = abandona):")
print(datos_modelo[OBJETIVO].value_counts().sort_index())


# 2. Separar las entradas X del objetivo y.
# X tiene forma (clientes, 7); y es un vector con la clase de cada cliente.
# to_numpy() convierte las columnas de pandas en arreglos de NumPy.
X = datos_modelo[VARIABLES].to_numpy()
y = datos_modelo[OBJETIVO].to_numpy()
print(f"\nForma de X (clientes, variables): {X.shape}")
print(f"Forma de y (clase por cliente): {y.shape}")

# Reservamos el 20 % para prueba y utilizamos el 80 % para entrenar.
# random_state=4 permite repetir la división. stratify=y mantiene aproximadamente
# la proporción de clientes que permanecen y abandonan en ambos conjuntos.
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=4, stratify=y
)


# 3. Estandarizar las entradas: z = (x - media) / desviación estándar.
# Las variables tienen escalas distintas (edad, ingresos, indicadores, etc.).
# Escalarlas ayuda a la optimización y a la regularización del modelo.
# fit_transform() aprende la media y la escala SOLO del entrenamiento.
# transform() aplica esos mismos parámetros a prueba sin volver a ajustarlos.
# Así evitamos que la preparación del modelo use información de la prueba.
escalador = StandardScaler()
X_train_std = escalador.fit_transform(X_train)
X_test_std = escalador.transform(X_test)
print("\nPrimeras cinco entradas de entrenamiento estandarizadas:")
print(pd.DataFrame(X_train_std, columns=VARIABLES).head().round(2))


# 4. Entrenar la regresión logística.
# El modelo calcula una puntuación: z = intercepto + suma(coeficiente * entrada).
# La función sigmoide transforma esa puntuación en una probabilidad entre 0 y 1:
# P(churn = 1) = 1 / (1 + exp(-z)).
# fit() aprende los coeficientes usando las entradas y las clases conocidas.
# max_iter limita las iteraciones del optimizador; no es el número de clientes.
modelo = LogisticRegression(max_iter=1000)
modelo.fit(X_train_std, y_train)


# 5. Obtener clases predichas y probabilidades: son resultados diferentes.
# predict() devuelve 0 o 1. En este problema binario, una probabilidad de abandono
# mayor que 0.5 lleva a predecir la clase 1; en un empate se elige la clase 0.
y_pred = modelo.predict(X_test_std)

# predict_proba() devuelve dos columnas en el orden indicado por classes_:
# aquí, [P(churn = 0), P(churn = 1)]. Cada fila suma 1.
y_prob = modelo.predict_proba(X_test_std)
print(f"\nOrden de las clases en las probabilidades: {modelo.classes_}")
print("Primeras cinco predicciones de prueba:")
print(pd.DataFrame({
    "Clase real": y_test[:5],
    "Clase predicha": y_pred[:5],
    "Probabilidad de abandono": y_prob[:5, 1],
}).round(3))


# 6. Evaluar el modelo con los clientes reservados para prueba.
# Exactitud: proporción de clases predichas correctamente; mayor es mejor.
# Si hay pocas bajas, la exactitud por sí sola puede resultar engañosa.
print("\nEvaluación en los datos de prueba:")
print(f"Exactitud: {accuracy_score(y_test, y_pred):.2%}")

# La pérdida logarítmica usa PROBABILIDADES, no las clases de predict().
# Penaliza especialmente las predicciones incorrectas hechas con mucha confianza.
# Un valor menor es mejor; una pérdida ideal de 0 corresponde a certeza correcta.
print(f"Pérdida logarítmica (log loss): {log_loss(y_test, y_prob, labels=modelo.classes_):.4f}")

# Precisión (precision): de los predichos como una clase, cuántos pertenecen a ella.
# Sensibilidad (recall): de los que pertenecen a una clase, cuántos detectamos.
# F1 combina precisión y sensibilidad; support es el número de casos reales.
# zero_division=0 asigna 0 cuando una métrica no se puede calcular por falta de casos.
print("\nInforme de clasificación:")
print(classification_report(
    y_test,
    y_pred,
    labels=[0, 1],
    target_names=["Permanece (0)", "Abandona (1)"],
    zero_division=0,
))


# 7. Interpretar y visualizar los coeficientes.
# Un coeficiente positivo aumenta la puntuación y la probabilidad de abandono;
# uno negativo las reduce, manteniendo constantes las demás entradas.
# Estos coeficientes actúan sobre entradas ESTANDARIZADAS: una unidad equivale
# a una desviación estándar de la variable en el entrenamiento.
# No son cambios directos en puntos porcentuales ni prueban una relación causal.
# Las categorías numéricas como ed se están tratando como una escala numérica;
# esa suposición conviene revisarla si se busca mejorar el modelo.
coeficientes = pd.Series(modelo.coef_[0], index=VARIABLES)
print("Coeficientes de las entradas estandarizadas:")
print(coeficientes.sort_values().round(3))
print(f"Intercepto: {modelo.intercept_[0]:.3f}")
# El intercepto es la puntuación cuando todas las entradas estandarizadas son 0,
# es decir, cuando sus valores originales coinciden con sus medias de entrenamiento.

figura, eje = plt.subplots(figsize=(9, 5))
coeficientes.sort_values().plot.barh(ax=eje, color="steelblue")
eje.axvline(0, color="black", linewidth=1)
eje.set_title("Regresión logística: coeficientes del abandono de clientes")
eje.set_xlabel("Coeficiente sobre la entrada estandarizada")
eje.set_ylabel("Variable de entrada")
plt.tight_layout()
plt.show()
