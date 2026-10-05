# The variables are container to stores values, in this case python use dynamic typing, so, the type of the variable is defined automatically
# To define a variable in python, we just need to assign a value to it

variable_example = 5
print(variable_example)

variable_example = "Now I'm a string"
print(variable_example)

# We can put a variable name and plus with another variable name
variable_example = variable_example + " and now I'm a string"
print(variable_example)

# A variable can be reassigned to a different type or value
variable_example = 10
print(variable_example)

variable_example = True
print(variable_example)

# type of data
# In python exist different types of data, between them:
# - int (integer)
# - float (decimal)
# - str (string)
# - bool (boolean)
# - None (NoneType)
# The None type is used to represent the absence of a value

# We can check the type of data with the function type()
print(type(variable_example))

# We can also check the type of data with the function isinstance()
print(isinstance(variable_example, int))
print(isinstance(variable_example, str))
print(isinstance(variable_example, bool))
print(isinstance(variable_example, type(None)))

# To define a variable, exist different rules:
# - The name of the variable must start with a letter or an underscore
# - The name of the variable cannot start with a number
# - The name of the variable can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
# - The name of the variable is case-sensitive
# - The name of the variable cannot be a reserved word

# Also exist different types of naming conventions for variables:
# - snake_case: We use a underscore to separate words
# - camelCase: We use a capital letter to start each word except the first
# - PascalCase: We use a capital letter to start each word

# To convert a variable to a different type, we can use the built-in functions like int(), float(), str(), bool(), etc.
# For example:
# int() - converts a value to an integer
# float() - converts a value to a float
# str() - converts a value to a string
# bool() - converts a value to a boolean
# etc.