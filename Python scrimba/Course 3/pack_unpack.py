# we can pack and unpack values

# first appears zip, this function combines two lists to create a zip object, after that we can create a list from it or other data structure

# to unpack we can use the * operator, this will unpack the values from the zip object

#example:
list1 = [1, 2, 3]
list2 = [4, 5, 6]
zip_object = zip(list1, list2)
# the result is a zip object that can be converted to a list, that returns a list of tuples, a tuple for each pair of elements, on in a dictionary a key-value pair
print(list(zip_object))

# we can create a dictionary from two lists using the zip function
keys = ['a', 'b', 'c']
values = [1, 2, 3]
dict_from_lists = dict(zip(keys, values))
print(dict_from_lists)

# or unpack the values and keys creating a list with the corresponding elements
keys = ['a', 'b', 'c']
values = [1, 2, 3]
dictionary = {key: value for key, value in zip(keys, values)}
print(dictionary)
keys,values = list(dictionary.keys()),list(dictionary.values())

# using the * operator to unpack the keys and values
print(*keys)
print(*values)
keys1, values1 = zip(*dictionary.items())