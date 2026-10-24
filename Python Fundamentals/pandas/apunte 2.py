# para crear un dataframe apartir de un diccionario, se puede utilizar el constructor DataFrame de pandas. Por ejemplo:
import pandas as pd

df = pd.DataFrame({
    'columna1': [1, 2, 3, 4],
    'columna2': ['a', 'b', 'c', 'd']
})

#asimismo si es apartir de otro dataframe y solo queremos que cumpla con ciertas caracteristicas, pdemos usar lo siguoente
df1 = df[df['columna1'] > 2]  # Filtra las filas donde el valor de 'columna1' es mayor que 2

# el anterior permite que se cumpla con una condicion, pero si queremos que cumpla con varias condiciones, podemos usar el operador & para combinar las condiciones. Por ejemplo, si queremos filtrar las filas donde el valor de 'columna1' es mayor que 2 y el valor de 'columna2' es igual a 'c', podemos hacer lo siguiente:
df2 = df[(df['columna1'] > 2) & (df['columna2'] == 'c')]  # Filtra las filas donde el valor de 'columna1' es mayor que 2 y el valor de 'columna2' es igual a 'c'

# asimismo si queremos filtrar las filas donde el valor de 'columna1' es mayor que 2 o el valor de 'columna2' es igual a 'c', podemos hacer lo siguiente:
df3 = df[(df['columna1'] > 2) | (df['columna2'] == 'c')]  # Filtra las filas donde el valor de 'columna1' es mayor que 2 o el valor de 'columna2' es igual a

# podemos hacer uso del metodo query para filtrar las filas de un dataframe utilizando una expresion booleana. Por ejemplo, si queremos filtrar las filas donde el valor de 'columna1' es mayor que 2 y el valor de 'columna2' es igual a 'c', podemos hacer lo siguiente:
df4 = df.query('columna1 > 2 and columna2 == "c"')  # Filtra las filas donde el valor de 'columna1' es mayor que 2 y el valor de 'columna2' es igual a 'c'

# finalmente si quisieramos guardar un dataframe en un archivo CSV, podemos utilizar el metodo to_csv. Por ejemplo, si queremos guardar el dataframe df en un archivo llamado 'data.csv', podemos hacer lo siguiente:
df.to_csv('data.csv', index=False)  # Guarda el dataframe df en un archivo llamado 'data.csv' sin incluir el indice
