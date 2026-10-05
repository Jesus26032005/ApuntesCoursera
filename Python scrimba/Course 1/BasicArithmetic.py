# Basic Arithmetic Operations
# In python exist the following arithmetic operators:
# + (addition)
# - (subtraction)
# * (multiplication)
# / (division)
# % (modulo - remainder)
# ** (exponentiation)
# // (floor division)

variable_one = 10
variable_two = 3

print(variable_one + variable_two)
print(variable_one - variable_two)
print(variable_one * variable_two)
print(variable_one / variable_two)
print(variable_one % variable_two) # Return the ramainder of the division   -> 1
print(variable_one ** variable_two) # Return the result of the exponentiation , that's is equal to 10^3 -> 1000
print(variable_one // variable_two) # Return the result of the floor division -> 3 


# Operations with strings
# We can use the + operator to concatenate strings
# We can use the * operator to repeat a string
# We can use the % operator to format a string
# We can use the format() method to format a string
# We can use the f-string to format a string

string_one = "Hello"
string_two = "World"

print(string_one + " " + string_two)
print(string_one * 3) # Print "HelloHelloHello"
print("%s %s" % (string_one, string_two)) # Print "Hello World"
print("{} {}".format(string_one, string_two)) # Print "Hello World"
print(f"{string_one} {string_two}") # Print "Hello World"

# Methods to modify string
# .upper() - Convert string to uppercase
# .lower() - Convert string to lowercase
# .capitalize() - Convert first character to uppercase
# .title() - Convert first character of each word to uppercase
# .strip() - Remove whitespace from beginning and end
# .replace() - Replace a string with another string,   "string_to_replace", "string_to_replace_with"

string_three = "  Hello World  "
print(string_three.upper()) # Print "  HELLO WORLD  "
print(string_three.lower()) # Print "  hello world  "
print(string_three.capitalize()) # Print "  hello world  "
print(string_three.title()) # Print "  Hello World  "
print(string_three.strip()) # Print "Hello World"
print(string_three.replace("World", "Python")) # Print "  Hello Python  "

# other methods:
# count() - Count the number of occurrences of a string
print(string_three.count("l")) # Print 3

# Slicing: We can cut a string into pieces or obtain a specific part of it
# the sintax is [start:stop:step]
# if we don't put a parameter, it will be the default value
# to omit a parameter, we can use a color (:) 
print(string_three[0:5]) # Print "Hello"
print(string_three[6:11]) # Print "World"
print(string_three[0:11:2]) # Print "HloWrd"
print(string_three[::-1]) # Print "dlroW olleH"