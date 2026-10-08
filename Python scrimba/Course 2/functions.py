# a function is a block of code that only runs when it is called
# you can pass data, known as parameters, into a function
# functions are used to perform certain actions, and they are also known as methods

# to define a function we use the keyword "def" followed by the function name and parentheses

def my_function():
    print("Hello from a function")
    
# to call a function we use the function name followed by parentheses
my_function()

# we can add parameter to the function, a parameter is used to pass data to the function
def my_function_with_parameter(name):
    print("Hello " + name)
    
# to call a function with a parameter we use the function name followed by parentheses and the parameter
my_function_with_parameter("John")

# we can add multiple parameters to the function
def my_function_with_multiple_parameters(name, age):
    print("Hello " + name + " you are " + str(age) + " years old")
    
# we can can call with the parameters in different order
my_function_with_multiple_parameters(age=36, name="John")

# to add default values to parameter we just assing a value to it, so when we call the function we can omit the parameter
def my_function_with_default_parameter(name, age=25):
    print("Hello " + name + " you are " + str(age) + " years old")
    
# to call a function with a default parameter we use the function name followed by parentheses and the parameter
my_function_with_default_parameter("John")

# we can also call the function with the default parameter overwritten
my_function_with_default_parameter("John", 30)

# return statement
# we use the return statement to return a value from a function, after the return statement the function ends

# to return a value or expression we use the return statement, using return and after that the value or expression we want to return

# example
def sum(a, b):
    return a + b

print(sum(5, 3))

# if we wan return more than one value, when the return statement is used, we can use a comma to separate the values, this creates a tuple with the values
def sum_and_subtract(a, b):
    return a + b, a - b

print(sum_and_subtract(5, 3))

# to assign the returned values to variables, we can use tuple unpacking
sum, subtract = sum_and_subtract(5, 3)
print(sum)
print(subtract)


# or assign the returned values to a variable
result = sum_and_subtract(5, 3)
print(result)
