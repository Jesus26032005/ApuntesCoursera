import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import train_test_split


# 1. Cargar los datos de consumo de combustible y emisiones de vehículos.
# Cada ejecución necesita acceso a Internet para leer este archivo CSV.
URL_DATOS = (
    "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/"
    "IBMDeveloperSkillsNetwork-ML0101EN-SkillsNetwork/"
    "labs/Module%202/data/FuelConsumptionCo2.csv"
)
datos = pd.read_csv(URL_DATOS)

# describe() calcula estadísticas como la media, el mínimo y el máximo.
# En un script debemos usar print() para ver el resultado en la terminal.
print("Resumen estadístico de los datos:")
print(datos.describe())


# 2. Elegir qué dato usaremos para predecir y qué valor queremos obtener.
# Es una regresión lineal simple porque utiliza una sola variable de entrada:
# X = tamaño del motor en litros; y = emisiones de CO₂ en gramos por kilómetro.
# Conservamos los nombres originales de las columnas para leer el CSV.
# scikit-learn espera X como una matriz (filas, columnas). Al usar [[...]],
# obtenemos una matriz con una columna sin necesitar reshape(-1, 1).
X = datos[["ENGINESIZE"]].to_numpy()
y = datos["CO2EMISSIONS"].to_numpy()

print(f"\nForma de X (vehículos, variables): {X.shape}")
print(f"Forma de y (emisiones por vehículo): {y.shape}")


# 3. Separar los datos: 80 % para entrenar y 20 % para evaluar.
# random_state=42 permite repetir la misma división al ejecutar el programa.
# Los datos de prueba no se usan durante el entrenamiento.
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)


# 4. Entrenar el modelo: fit() encuentra la recta que mejor se ajusta
# a los datos de entrenamiento minimizando la suma de errores al cuadrado.
# La ecuación es: emisiones estimadas = pendiente * tamaño del motor + intercepto.
modelo = LinearRegression()
modelo.fit(X_train, y_train)

print(f"\nPendiente (coeficiente del tamaño del motor): {modelo.coef_[0]:.2f}")
print(f"Intercepto (valor de la recta cuando X = 0): {modelo.intercept_:.2f}")
# El intercepto forma parte de la ecuación; no necesariamente representa
# las emisiones reales de un vehículo con un motor de cero litros.


# 5. Predecir las emisiones de los vehículos reservados para la prueba.
y_pred = modelo.predict(X_test)


# 6. Comparar las predicciones con las emisiones reales.
# MAE: promedio de los errores absolutos, expresado en g/km.
# MSE: promedio de los errores al cuadrado; penaliza más los errores grandes.
# RMSE: raíz del MSE, vuelve a expresar el error en g/km.
# En estas tres métricas, un valor menor indica menos error.
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)

# R² compara el modelo con predecir siempre la media de y_test.
# 1 indica predicciones perfectas; 0 equivale a esa referencia.
# Puede ser negativo si el modelo es peor que predecir la media.
r2 = r2_score(y_test, y_pred)

print("\nEvaluación con los datos de prueba:")
print(f"Error absoluto medio (MAE): {mae:.2f} g/km")
print(f"Error cuadrático medio (MSE): {mse:.2f} (g/km)²")
print(f"Raíz del error cuadrático medio (RMSE): {rmse:.2f} g/km")
print(f"Coeficiente de determinación (R²): {r2:.2f}")


# 7. Visualizar los datos de entrenamiento y la recta aprendida.
# Usamos los extremos del rango del motor para dibujar la recta en orden.
X_recta = np.array([[X_train.min()], [X_train.max()]])
y_recta = modelo.predict(X_recta)

plt.figure(figsize=(8, 5))
plt.scatter(X_train[:, 0], y_train, color="blue", label="Datos de entrenamiento")
plt.plot(X_recta[:, 0], y_recta, color="red", label="Recta de regresión")
plt.xlabel("Tamaño del motor (litros)")
plt.ylabel("Emisiones de CO₂ (g/km)")
plt.title("Regresión lineal simple: tamaño del motor y emisiones")
plt.legend()
plt.tight_layout()
plt.show()
