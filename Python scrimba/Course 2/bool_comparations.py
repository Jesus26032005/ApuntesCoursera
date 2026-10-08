# boolean comparations
# in python and other programming languages we can compare values with operators

# comparison operators
# == equal
# != not equal
# > greater than
# < less than
# >= greater than or equal
# <= less than or equal

# example
print(5 == 5) # True
print(5 != 5) # False
print(5 > 5) # False
print(5 < 5) # False
print(5 >= 5) # True
print(5 <= 5) # True

# also exist the bool data type, which can be either True or False
print(bool(5 == 5)) # True
print(bool(5 != 5)) # False
print(bool(5 > 5)) # False
print(bool(5 < 5)) # False
print(bool(5 >= 5)) # True
print(bool(5 <= 5)) # True

# the value true can be assigned or appear in different ways, a string, list, tuple, dictionary, set, etc.
string_bool_true = "hello"
print(bool(string_bool_true)) # True
list_bool_true = [1, 2, 3]
print(bool(list_bool_true)) # True
tuple_bool_true = (1, 2, 3)
print(bool(tuple_bool_true)) # True
dictionary_bool_true = {"a": 1, "b": 2}
print(bool(dictionary_bool_true)) # True
set_bool_true = {1, 2, 3}
print(bool(set_bool_true)) # True

# the value false can be assigned or appear in different ways, an empty string, list, tuple, dictionary, set, etc.
string_bool_false = ""
print(bool(string_bool_false)) # False
list_bool_false = []
print(bool(list_bool_false)) # False
tuple_bool_false = ()
print(bool(tuple_bool_false)) # False
dictionary_bool_false = {}
print(bool(dictionary_bool_false)) # False
set_bool_false = set()
print(bool(set_bool_false)) # False

# the value None is also considered false
print(bool(None)) # False

# to convert a value to a boolean, we can use the bool() function
print(bool("hello")) # True
print(bool(0)) # False


# logical operators
# and
# or
# not
# with the logical operators we can combine boolean values and get a boolean value as a result

# and
print(True and True) # True
print(True and False) # False
print(False and True) # False
print(False and False) # False

# or
print(True or True) # True
print(True or False) # True
print(False or True) # True
print(False or False) # False

# not
print(not True) # False
print(not False) # True


