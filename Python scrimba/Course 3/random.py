# to work with random data we need to import the random module
import random

# random.random() returns a random float between 0 and 1
print(random.random())

# random.randint() returns a random integer between the specified integers
print(random.randint(1, 10))

# random.choice() returns a random item from a list
print(random.choice(['a', 'b', 'c', 'd', 'e']))

# random.shuffle() shuffles a list
print(random.shuffle(['a', 'b', 'c', 'd', 'e']))

# random.uniform() returns a random float between the specified floats
print(random.uniform(1, 10))

#random.randrange() returns a random integer between the specified integers
print(random.randrange(1, 10))

#random.sample() returns a random sample from a list but without repetition 
print(random.sample(['a', 'b', 'c', 'd', 'e'], 3))


# strings module has a lot of useful functions
import string

# string.ascci_leters return all the letters in the alphabet
print(string.ascii_letters)

# string.digits return all the digits
print(string.digits)