"""Laboratorio 2: regresión lineal múltiple para estimar emisiones de CO₂.

Basado en el laboratorio de IBM Skills Network y adaptado como script.
A diferencia de lab1, aquí usamos dos variables para hacer la predicción.
"""

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler


# 1. Cargar y explorar los datos.
# Cada ejecución necesita Internet para descargar el CSV.
URL_DATOS = (
    "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/"
    "IBMDeveloperSkillsNetwork-ML0101EN-SkillsNetwork/"
    "labs/Module%202/data/FuelConsumptionCo2.csv"
)
datos = pd.read_csv(URL_DATOS)
print("Resumen estadístico:")
print(datos.describe())

# Para esta práctica excluimos las categorías de texto y el año del modelo.
# El año es constante en este conjunto y no ayuda a distinguir vehículos.
# Las categorías podrían aprovecharse con otra preparación de los datos.
datos_numericos = datos.drop(
    columns=["MODELYEAR", "MAKE", "MODEL", "VEHICLECLASS", "TRANSMISSION", "FUELTYPE"]
)
print("\nCorrelaciones entre las variables numéricas:")
print(datos_numericos.corr().round(2))

# La correlación de Pearson mide asociaciones LINEALES: va de -1 a 1.
# Un valor cercano a 0 no descarta una relación no lineal ni demuestra independencia.
# Siguiendo el laboratorio, conservamos el tamaño del motor y el rendimiento
# combinado en MPG; las otras variables aportan información muy parecida.
# MPG significa millas por galón: un valor mayor indica mayor rendimiento.
# L/100 km y MPG se relacionan de forma inversa, no mediante una conversión
# lineal. Por eso su correlación de Pearson no tiene por qué ser exactamente -1.
VARIABLES = ["ENGINESIZE", "FUELCONSUMPTION_COMB_MPG"]
OBJETIVO = "CO2EMISSIONS"
datos_modelo = datos_numericos[VARIABLES + [OBJETIVO]]
print("\nPrimeros registros de las columnas seleccionadas:")
print(datos_modelo.head(9))

# La selección de variables viene fijada por el ejercicio. En un proyecto real,
# se debe reservar la prueba antes de tomar decisiones a partir de los datos.
# La matriz muestra relaciones por pares e histogramas en la diagonal.
# Una nube curva sugiere que una recta puede no describir bien la relación.
ejes = pd.plotting.scatter_matrix(datos_modelo, alpha=0.2, figsize=(10, 8))
for eje in ejes.flatten():
    eje.xaxis.label.set_rotation(90)
    eje.yaxis.label.set_rotation(0)
    eje.yaxis.label.set_ha("right")
plt.tight_layout()
plt.show()


# 2. Preparar las entradas X y el objetivo y.
# Seleccionamos por nombre para no depender del orden de las columnas del CSV.
# X tiene forma (vehículos, 2); y es un vector de forma (vehículos,).
# Con este y de una dimensión, coef_ también será un vector: [b1, b2].
X = datos_modelo[VARIABLES].to_numpy()
y = datos_modelo[OBJETIVO].to_numpy()

# Reservamos el 20 % para prueba. random_state permite repetir la división.
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)


# 3. Estandarizar las entradas: z = (x - media) / desviación estándar.
# fit_transform() aprende la media y la escala SOLO del entrenamiento.
# transform() aplica esos mismos valores a la prueba, sin volver a aprenderlos.
# Esto evita filtrar información de prueba al entrenamiento, como ocurría
# al estandarizar todo X antes de dividir en el ejemplo del notebook.
# En regresión lineal sin regularización no es obligatorio estandarizar;
# lo hacemos para seguir el laboratorio y comparar escalas de coeficientes.
escalador = StandardScaler()
X_train_std = escalador.fit_transform(X_train)
X_test_std = escalador.transform(X_test)
print("\nResumen de las entradas de entrenamiento estandarizadas:")
print(pd.DataFrame(X_train_std, columns=VARIABLES).describe().round(2))
# La media queda cerca de 0. StandardScaler usa desviación poblacional (ddof=0);
# describe() muestra la muestral (ddof=1), que puede diferir ligeramente de 1.


# 4. Entrenar la regresión múltiple.
# Ecuación: CO₂ estimado = intercepto + b1 * motor_std + b2 * rendimiento_std.
# fit() busca los parámetros que minimizan la suma de errores al cuadrado.
# Con dos entradas, la superficie ajustada es un plano en tres dimensiones.
modelo = LinearRegression()
modelo.fit(X_train_std, y_train)
print("\nCoeficientes con entradas estandarizadas:")
for nombre, coeficiente in zip(VARIABLES, modelo.coef_):
    print(f"{nombre}: {coeficiente:.2f}")
print(f"Intercepto: {modelo.intercept_:.2f}")


# 5. Expresar la misma ecuación en las unidades originales (litros y MPG).
# Sustituimos z = (x - media) / escala en la ecuación anterior:
# coef_original = coef_estandarizado / escala.
# intercepto_original = intercepto_estandarizado - suma(coef_original * media).
# scale_ incluye el tratamiento de columnas constantes de StandardScaler.
coef_original = modelo.coef_ / escalador.scale_
intercepto_original = modelo.intercept_ - np.sum(coef_original * escalador.mean_)
print("\nEcuación en unidades originales (resultado en g/km):")
print(
    f"CO₂ = {intercepto_original:.2f} "
    f"{coef_original[0]:+.2f} * motor_litros "
    f"{coef_original[1]:+.2f} * rendimiento_MPG"
)
# Cada coeficiente representa el cambio estimado al aumentar una entrada
# una unidad, manteniendo la otra constante. No demuestra una causa física.
# El intercepto corresponde a entradas iguales a cero; fuera del rango de
# entrenamiento no necesariamente tiene una interpretación física útil.


# 6. Evaluar con vehículos que el modelo no utilizó para entrenar.
y_pred = modelo.predict(X_test_std)
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
print("\nEvaluación del modelo múltiple en prueba:")
print(f"Error absoluto medio (MAE): {mae:.2f} g/km")
print(f"Error cuadrático medio (MSE): {mse:.2f} (g/km)²")
print(f"Raíz del error cuadrático medio (RMSE): {np.sqrt(mse):.2f} g/km")
print(f"Coeficiente de determinación (R²): {r2_score(y_test, y_pred):.2f}")
# MAE y RMSE expresan errores en las unidades del objetivo; menor es mejor.
# R² = 1 indica predicción perfecta; 0 equivale a predecir la media de y_test.
# R² puede ser negativo si las predicciones son peores que esa referencia.


# 7. Dibujar el plano de regresión y los puntos de prueba en unidades originales.
# meshgrid() construye una cuadrícula de combinaciones de motor y rendimiento.
# Convertimos la cuadrícula a filas de dos entradas, las estandarizamos y
# predecimos su altura. reshape() devuelve esas alturas a la forma de la malla.
motor_malla, rendimiento_malla = np.meshgrid(
    np.linspace(X_test[:, 0].min(), X_test[:, 0].max(), 50),
    np.linspace(X_test[:, 1].min(), X_test[:, 1].max(), 50),
)
entradas_malla = np.column_stack([motor_malla.ravel(), rendimiento_malla.ravel()])
emisiones_malla = modelo.predict(escalador.transform(entradas_malla)).reshape(
    motor_malla.shape
)

# Las máscaras son vectores booleanos: no requieren índices como [:, 0].
# Encima del plano: emisión real >= predicción; debajo: emisión real < predicción.
encima = y_test >= y_pred
debajo = ~encima
figura = plt.figure(figsize=(11, 8))
eje = figura.add_subplot(111, projection="3d")
for mascara, etiqueta, color in [
    (encima, "Emisión real ≥ predicción", "blue"),
    (debajo, "Emisión real < predicción", "orange"),
]:
    eje.scatter(
        X_test[mascara, 0], X_test[mascara, 1], y_test[mascara],
        label=etiqueta, color=color, alpha=0.7, edgecolors="black",
    )
eje.plot_surface(motor_malla, rendimiento_malla, emisiones_malla, color="gray", alpha=0.3)
eje.set_xlabel("Tamaño del motor (litros)")
eje.set_ylabel("Rendimiento combinado (MPG)")
eje.set_zlabel("Emisiones de CO₂ (g/km)")
eje.set_title("Regresión lineal múltiple: plano y datos de prueba")
eje.view_init(elev=20, azim=45)
eje.legend()
plt.tight_layout()
plt.show()


# 8. Cortes del plano: variar una entrada y mantener la otra en su media.
# En escala estandarizada, fijar una entrada en 0 equivale a fijarla en su media
# de entrenamiento. Estas rectas son cortes del modelo múltiple, no modelos
# simples reajustados. Los puntos, en cambio, tienen valores variados de la
# otra entrada: su distancia a la recta NO es el error del modelo múltiple.
figura, ejes = plt.subplots(1, 2, figsize=(12, 5))
for indice, eje in enumerate(ejes):
    valores = np.linspace(X_train_std[:, indice].min(), X_train_std[:, indice].max(), 100)
    corte = np.zeros((100, 2))
    corte[:, indice] = valores
    eje.scatter(X_train_std[:, indice], y_train, alpha=0.3, label="Entrenamiento")
    eje.plot(valores, modelo.predict(corte), color="red", label="Otra entrada en su media")
    eje.set_xlabel(f"{VARIABLES[indice]} (estandarizada)")
    eje.set_ylabel("Emisiones de CO₂ (g/km)")
    eje.legend()
figura.suptitle("Cortes del plano de regresión múltiple")
plt.tight_layout()
plt.show()


# 9. Ejercicios 1 a 5 del notebook: ajustar modelos simples por separado.
# Para cada variable entrenamos un modelo NUEVO, usando una sola columna.
# X[:, [indice]] conserva la forma de matriz (filas, 1) que requiere fit().
# Ejercicios 1 y 2: motor y gráfica de entrenamiento; 3: gráfica de prueba.
# Ejercicios 4 y 5: rendimiento en MPG y su gráfica de prueba.
# Mostramos ambos conjuntos para cada modelo y comparamos sus métricas.
for indice, nombre in enumerate(VARIABLES):
    modelo_simple = LinearRegression()
    modelo_simple.fit(X_train[:, [indice]], y_train)
    pred_simple = modelo_simple.predict(X_test[:, [indice]])
    print(f"\nModelo simple con {nombre} (unidades originales):")
    print(f"Coeficiente: {modelo_simple.coef_[0]:.2f}")
    print(f"Intercepto: {modelo_simple.intercept_:.2f}")
    print(f"MAE en prueba: {mean_absolute_error(y_test, pred_simple):.2f} g/km")
    print(f"R² en prueba: {r2_score(y_test, pred_simple):.2f}")

    figura, ejes = plt.subplots(1, 2, figsize=(12, 5))
    for eje, entradas, emisiones, titulo in [
        (ejes[0], X_train, y_train, "Entrenamiento"),
        (ejes[1], X_test, y_test, "Prueba"),
    ]:
        # Dibujamos la misma recta entrenada en ambos conjuntos, sin reajustarla.
        extremos = np.array([[entradas[:, indice].min()], [entradas[:, indice].max()]])
        eje.scatter(entradas[:, indice], emisiones, alpha=0.4)
        eje.plot(extremos[:, 0], modelo_simple.predict(extremos), color="red")
        unidad = "litros" if indice == 0 else "MPG"
        eje.set_xlabel(f"{nombre} ({unidad})")
        eje.set_ylabel("Emisiones de CO₂ (g/km)")
        eje.set_title(titulo)
    figura.suptitle(f"Regresión lineal simple con {nombre}")
    plt.tight_layout()
    plt.show()

# Una recta simple y un corte del plano responden a preguntas distintas.
# Compara las métricas sobre la misma prueba para evaluar el ajuste; una
# gráfica por sí sola no demuestra qué modelo predice mejor. Si ves curvatura,
# puede ser útil estudiar relaciones no lineales en los siguientes laboratorios.
