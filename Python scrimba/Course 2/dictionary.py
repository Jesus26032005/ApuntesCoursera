# a dictionary is a collection of key-value pairs
# a dictionary is mutable and ordered (since Python 3.7)
# a dictionary is defined with curly braces {} and key-value pairs separated by colons :
# example:
dictionary = {"key": "value"}
print(dictionary) # Print {"key": "value"}

# we can use different method to obtain values from a dictionary
# .get() - Returns the value for the specified key
print(dictionary.get("key")) # Print "value"

# .keys() - Returns a list containing the dictionary's keys
print(dictionary.keys()) # Print dict_keys(['key'])

# .values() - Returns a list of all the values in the dictionary
print(dictionary.values()) # Print dict_values(['value'])

# .items() - Returns a list containing a tuple for each key value pair
print(dictionary.items()) # Print dict_items([('key', 'value')])

# .update() - Updates the dictionary with the specified key-value pairs
dictionary.update({"new_key": "new_value"})
print(dictionary) # Print {"key": "value", "new_key": "new_value"}

# .pop() - Removes the element with the specified key
dictionary.pop("new_key")
print(dictionary) # Print {"key": "value"}

# .popitem() - Removes the last inserted key-value pair
dictionary.popitem()
print(dictionary) # Print {}

# .clear() - Removes all the elements from the dictionary
dictionary.clear()
print(dictionary) # Print {}

# to add a new key-value pair to a dictionary, we can use the square bracket notation
dictionary["new_key"] = "new_value"
print(dictionary) # Print {"new_key": "new_value"}

# we can also use the .update() method to add a new key-value pair
dictionary.update({"another_key": "another_value"})
print(dictionary) # Print {"new_key": "new_value", "another_key": "another_value"}