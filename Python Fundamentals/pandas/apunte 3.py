# una serie es una estructura de datos unidimensional que puede contener cualquier tipo de dato (enteros, cadenas, flotantes, objetos de Python, etc.). Se puede pensar en una serie como una columna de un dataframe. Cada elemento de la serie tiene un índice asociado, que se puede utilizar para acceder a los elementos de la serie.

# para crear una serie a partir de una lista, se puede utilizar el constructor Series de pandas. Por ejemplo:
import pandas as pd
data = [1, 2, 3, 4, 5]
serie = pd.Series(data)

# asimismo se puede crear una serie a partir de un diccionario, donde las claves del diccionario se convierten en los índices de la serie y los valores del diccionario se convierten en los valores de la serie. Por ejemplo:
data = {'a': 1, 'b': 2, 'c': 3}
serie = pd.Series(data)

# se puede accder a los elemento sde una seria por etiqueta o por su posicion. Por ejemplo, si queremos acceder al elemento con la etiqueta 'b', podemos hacer lo siguiente:
print(serie['b'])  # Accede al elemento con la etiqueta 'b'
print(serie[1])  # Accede al elemento en la posición 1
print(serie.loc['b'])  # Accede al elemento con la etiqueta 'b' utilizando loc
# se tienen varioss atributos y metodos los mas comunes son
serie.values  # Devuelve los valores de la serie como un array de NumPy
serie.index  # Devuelve los índices de la serie como un objeto Index de pandas
serie.shape  # Devuelve la forma de la serie como una tupla (número de elementos,)
serie.size  # Devuelve el número de elementos en la serie
serie.sum()  # Devuelve la suma de los elementos de la serie
serie.mean()  # Devuelve la media de los elementos de la serie
serie.min()  # Devuelve el valor mínimo de los elementos de la serie
serie.max()  # Devuelve el valor máximo de los elementos de la serie
serie.unique()  # Devuelve los valores únicos de la serie como un array de NumPy
serie.nunique()  # Devuelve el número de valores únicos en la serie
serie.sort_values()  # Devuelve una nueva serie con los valores ordenados
serie.sort_index()  # Devuelve una nueva serie con los índices ordenados
serie.isnull()  # Devuelve una serie booleana indicando si los elementos son nulos (NaN) o no
serie.notnull()  # Devuelve una serie booleana indicando si los elementos no son nulos (NaN) o no
serie.apply(lambda x: x * 2)  # Aplica una función a cada elemento de la serie y devuelve una nueva serie


# Se puede haacer la seleccion de columnas de un dataframe utilizando el nombre de la columna entre corchetes. Por ejemplo, si queremos seleccionar la columna 'columna1' del dataframe df, podemos hacer lo siguiente:
df = pd.DataFrame({
    'columna1': [1, 2, 3, 4],
    'columna2': ['a', 'b', 'c', 'd']
})
df['columna1']  # Selecciona la columna 'columna1' del

# se íede rebanar un dataframe utilizando el operador de rebanado. Por ejemplo, si queremos seleccionar las filas 0 a 2 del dataframe df, podemos hacer lo siguiente:
df[0:2]  # Selecciona las filas 0 a 2 del
