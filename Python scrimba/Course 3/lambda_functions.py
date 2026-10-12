# lambda funcions or anonymous functions
# A lambda function is a form of function that does not require a name

# to create a lambda function we use the keyword lambda 
name = lambda x: x + 1
print(name(5))
# we can asign a lambda function to a variable, or use it directly when its necesario, or pass it as an argument to another function

# the sintaxis for a lambda function is:
# lambda parameters: expression
# the return statement is implicit in a lambda function

#if we just use a parameter, we can use it directly
square = lambda x: x ** 2
print(square(5))

#if we use multiple parameters, we can use them directly or put brackets
sum = lambda x, y: x + y
print(sum(5, 3))

# we can define a funcion to return a lambda an create functions depending a argument or condition
def myfunc(n):
    return lambda x: x * n

mydoubler = myfunc(2)
mytripler = myfunc(3)
print(mydoubler(11))
print(mytripler(11))