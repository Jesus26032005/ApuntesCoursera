# loops
# a loop is a control structure that allows you to repeatedly execute a block of code

# the first is the while loop
# this structure evaluates the condition before executing the block of code

# syntax:
# while condition:
#     block of code

numero = 1
while numero < 10:
    print(numero)
    numero += 1

# the second is the for loop
# this structure iterates over a sequence of elements

# syntax:
# for element in sequence:
#     block of code

for i in range(1, 10):
    print(i)

# in this case we use range() to generate a sequence of numbers, range is a function that returns a sequence of numbers, the sintax of range is range(start, stop, step)
# start is the first number of the sequence
# stop is the last number of the sequence
# step is the increment of the sequence

# exist other ways to iterate over a sequence, for example, you can iterate over a string
for letter in "hello":
    print(letter)

# you can also iterate over a list
for item in [1, 2, 3, 4, 5]:
    print(item)

# you can also iterate over a dictionary
for key, value in {"a": 1, "b": 2, "c": 3}.items():
    print(key, value)

# break and continue
# break is used to exit a loop
# continue is used to skip the current iteration and continue with the next one

# example of break
for i in range(1, 10):
    if i == 5:
        break
    print(i)

# example of continue
for i in range(1, 10):
    if i == 5: # if we find 5, we skip it and continue with the next iteration
        continue
    print(i)


# nested loops
# you can nest loops inside other loops
for i in range(1, 10):
    for j in range(1, 10):
        print(i, j)
# this type of loop is used to matrix, vector and other type of data structures

# enumerate
# enumerate is a function that returns a tuple containing a count (from start which defaults to 0) and the values obtained from iterating over a sequence
for index, value in enumerate(["a", "b", "c"]):
    print(index, value)
# the argument of the enumerate function is the sequence we want to iterate over, for exameple a list, a string, a tuple, etc.

list_number = [1, 2, 3, 4, 5]
for index, value in enumerate(list_number):
    print(index, value)

# if we want to start the count from 1 instead of 0, we can pass the argument 1 to the enumerate function
for index, value in enumerate(list_number, 1):
    print(index, value)

# sort and sorted
# sort is a method that sorts a list in ascending order, is destructive (modifies the original list)
# sorted is a function that returns a new sorted list from the elements of any sequence (doesn't modify the original list)

list_numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
print(list_numbers.sort()) # None, because sort is destructive and modifies the original list
print(list_numbers) # [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

list_numbers2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
print(sorted(list_numbers2)) # [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9], because sorted returns a new list
print(list_numbers2) # [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], because sorted doesn't modify the original list

# to order a dictionary by value or key, we can use the sorted function with a key parameter
dictionary = {"a": 1, "b": 2, "c": 3}
print(sorted(dictionary.items(), key=lambda x: x[1])) # [('a', 1), ('b', 2), ('c', 3)], because sorted returns a new list
print(dictionary) # {'a': 1, 'b': 2, 'c': 3}, because sorted doesn't modify the original dictionary

# key is a function that takes one argument and returns one value, in this case, x[1] means the second element of the tuple (the value), this because dictionary.items() returns a list of tuples (key, value)