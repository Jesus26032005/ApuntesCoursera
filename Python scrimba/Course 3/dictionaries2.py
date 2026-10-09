# dictionaries are a collection of key-value pairs
# dictionaries are mutable and unordered
# dictionaries are defined with curly braces {} and key-value pairs separated by colons :
# example:
dictionary = {"key": "value"}
print(dictionary) # Print {"key": "value"}

# the principal difference between dictionaries and lists is that dictionaries are mutable while lists are not, and to access a value in a dictionary we use the key instead of the index, however, we can access a value in a dictionary using the key number

dictionary_2 = {"name": "John", "age": 30, "city": "New York"}
print(dictionary_2) # Print {"name": "John", "age": 30, "city": "New York"}

# to access a value in a dictionary we use the key
print(dictionary_2["name"]) # Print "John"
print(dictionary_2["age"]) # Print 30
print(dictionary_2["city"]) # Print "New York"


# we can also use the get() method to access a value in a dictionary
print(dictionary_2.get("name")) # Print "John"
print(dictionary_2.get("age")) # Print 30
print(dictionary_2.get("city")) # Print "New York"

# we can also use the get() method to access a value in a dictionary with a default value
print(dictionary_2.get("name")) # Print "John"
print(dictionary_2.get("age")) # Print 30
print(dictionary_2.get("city")) # Print "New York"

# we can also use the get() method to access a value in a dictionary with a default value if the key does not exist
print(dictionary_2.get("country", "Country not found")) # Print "Country not found"

# we can modify the value of a key in a dictionary
dictionary_2["name"] = "Jane"
print(dictionary_2) # Print {"name": "Jane", "age": 30, "city": "New York"}

# we can also add a new key-value pair to a dictionary
dictionary_2["country"] = "USA"
print(dictionary_2) # Print {"name": "Jane", "age": 30, "city": "New York", "country": "USA"}

# also exist the method update() to add a new key-value pair to a dictionary
dictionary_2.update({"country": "USA"})
print(dictionary_2) # Print {"name": "Jane", "age": 30, "city": "New York", "country": "USA"}

# or modify a value in a dictionary
dictionary_2.update({"age": 31})
print(dictionary_2) # Print {"name": "Jane", "age": 31, "city": "New York", "country": "USA"}

# to delete a key-value pair from a dictionary we can use the del statement
del dictionary_2["country"]
print(dictionary_2) # Print {"name": "Jane", "age": 31, "city": "New York"}

# or use the pop() method
dictionary_2.pop("age")
print(dictionary_2) # Print {"name": "Jane", "city": "New York"}

# or use the popitem() method to remove the last key-value pair
dictionary_2.popitem()
print(dictionary_2) # Print {"name": "Jane"}

# or use the clear() method to remove all key-value pairs
dictionary_2.clear()
print(dictionary_2) # Print {}

# to obtain the length of a dictionary we can use the len() function
print(len(dictionary_2)) # Print 0

dictionary_2 = {"name": "John", "age": 30, "city": "New York"}

# we can obtain all the keys of a dictionary using the keys() method
print(dictionary_2.keys())
# we can obtain all the values of a dictionary using the values() method
print(dictionary_2.values())

# we can obtain all the key-value pairs of a dictionary using the items() method
print(dictionary_2.items())


# we can pas to the method update other dictionary
dictionary_3 = {"country": "USA"}
dictionary_2.update(dictionary_3)
print(dictionary_2) # Print {"name": "John", "age": 30, "city": "New York", "country": "USA"}

# also we can concatenate dictionaris using update
dictionary_4 = {"hobby": "reading"}
dictionary_2.update(dictionary_4)
print(dictionary_2) # Print {"name": "John", "age": 30, "city": "New York", "country": "USA", "hobby": "reading"}

# if is one more we can use for to concatenate 
for group in [dictionary_3, dictionary_4]:
    dictionary_2.update(group)
print(dictionary_2) # Print {"name": "John", "age": 30, "city": "New York", "country": "USA", "hobby": "reading"}

# unpacking is a more elegant way to concatenate dictionaries
dictionary_5 = {**dictionary_3, **dictionary_4}
print(dictionary_5) # Print {"country": "USA", "hobby": "reading"}
# this form take the items from the dictionaries and create a new dictionary

