# Pandas es una libreria mmuy util para el analisis de datos en Python. Permite trabajar con estructuras de datos como DataFrames y Series, facilitando la manipulación, limpieza y análisis de datos de manera eficiente.

# para abrir un archivo CSV y cargarlo en un DataFrame, se puede utilizar la función read_csv de pandas. Por ejemplo:
import pandas as pd

url = "https://raw.githubusercontent.com/username/repo/main/data.csv"

df = pd.read_csv(url)

# El dataframe es la estructura base de pandas y se puede pensar en él como una tabla de datos bidimensional, similar a una hoja de cálculo o una tabla SQL. Cada columna del DataFrame puede tener un tipo de dato diferente (por ejemplo, numérico, cadena, fecha, etc.), y cada fila representa un registro o una observación.

# Para leer las primeras 5 filas de un dataframe se usa el metodo head
print(df.head())

# para ver las ultimas 5 filas se usa el metodo tail
print(df.tail())

# para obtener informacion del dataframe, como el numero de filas y columnas, los nombres de las columnas y los tipos de datos, se puede utilizar el metodo info
print(df.info())

# para describir estadisticamente el dataframe, se puede utilizar el metodo describe, que proporciona un resumen estadistico de las columnas numericas del dataframe
print(df.describe())

# Para obtener el valor de un elemento se puede usar el metodo loc o iloc. El metodo loc se utiliza para acceder a un grupo de filas y columnas por etiquetas o una matriz booleana, mientras que iloc se utiliza para acceder a un grupo de filas y columnas por indices enteros.

print(df.loc[0, 'nombre_columna'])  # Accede al valor de la primera fila y la columna 'nombre_columna'
print(df.iloc[0, 0])  # Accede al valor de la primera fila y la primera columna

# si quisieramos cambiar el indice de un dataframe, podemos usar el metodo set_index. Por ejemplo, si queremos establecer la columna 'id' como el indice del dataframe, podemos hacer lo siguiente:
df.set_index('id', inplace=True)

# el metodo .index devuelve el indice del dataframe, que es una estructura de datos que contiene las etiquetas de las filas. Por ejemplo, si queremos ver el indice del dataframe, podemos hacer lo siguiente:
print(df.index)

# se pueden obtener mas de un valor con iloc o loc, por ejemplo, si queremos obtener las filas 0 y 1 y las columnas 'nombre_columna' y 'otra_columna', podemos hacer lo siguiente:
print(df.loc[0
        :2, ['nombre_columna', 'otra_columna']])  # Accede a las filas 0 y 1 y las columnas 'nombre_columna' y 'otra_columna'

# asimismo se puede reasignar valores a un dataframe utilizando loc o iloc. Por ejemplo, si queremos cambiar el valor de la primera fila y la columna 'nombre_columna' a 'nuevo_valor', podemos hacer lo siguiente:
df.loc[0, 'nombre_columna'] = 'nuevo_valor'