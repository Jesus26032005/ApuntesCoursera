# when we run a program and it fails, we get an error, that ends the program, to avoid this we use try-except

# this sintaxis is:
try:
    # code that might raise an exception
except:
    # code that will run if an exception is raised}
else:
    # code that will run if no exception is raised
finally:
    # code that will run always

# example:
try:
    age = int(input("Age: "))
except ValueError:
    print("You didn't enter a valid age.")
else:
    print("No exception were thrown")
finally:
    print("Always run")

# we can just put except: to catch any exception or a specific one for example zeroDivisionError, ValueError, etc.

try:
    result = 6/0
except ZeroDivisionError:
    print("You can't divide by zero")
else:
    print("No exception were thrown")
finally:
    print("Always run")


# we can lunch a error with the keyword raise, this is useful when we want to validate input
try:
    age = int(input("Age: "))
    if age < 0:
        raise ValueError("Age cannot be negative")
except ValueError as e:
    print(e)
else:
    print("No exception were thrown")
finally:
    print("Always run")