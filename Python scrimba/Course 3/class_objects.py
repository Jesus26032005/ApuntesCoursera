# the class is a blueprint for creating objects, it defines the properties and methods that the objects will have, and a object is an instance of a class

# to create a class we use the keyword class
class Person:
    pass

# to define a method we use the keyword def, the fist method is always __init__ and it is the constructor
def __init__(self):
    pass
def printname(self):
    print(self.name)

# to define atribute we use the keyword self in the constructor
def __init__(self, name):
    self.name = name

# when we add the parameter self in a function, the function is an instance method, and when in the clase we dont use the self parameter, it is a class method


# to create a object we use the class name followed by parentheses
person1 = Person("John")
# and to access the attribute we use the dot notation
print(person1.name)
# the same syntax is used to access methods
person1.printname()


# inheritance 
# inheritance refers to the relationship between a parent class and its child class, in this case the child class inherits the properties and methods from the parent class

# to define a class and his parent class we use the keyword class and the name of the class and the name of the parent class
class Student(Person):
    pass

