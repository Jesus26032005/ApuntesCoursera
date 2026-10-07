# tuples are immutable lists, they use parentheses instead of square brackets
# in the tuples we cant append, remove, etc.

tuple_one = (1, 2, 3, 4, 5)
print(tuple_one)

# we can access to the elements of the tuple like in lists
print(tuple_one[0])
print(tuple_one[1:3])
print(tuple_one[-1])
print(tuple_one[:-1])

# we can't modify the elements of the tuple
# tuple_one[0] = 10  # This will raise an error
# but if the tuple contains a list, we can modify the list
tuple_with_list = (1, 2, [3, 4, 5])
print(tuple_with_list)
tuple_with_list[2][0] = 10
print(tuple_with_list)


# we can use the same methods as in lists
print(len(tuple_one))
print(tuple_one.count(1))
print(tuple_one.index(1))

# set are a type of data that is unordered and mutable, and it doesn't allow duplicate values
# they use curly braces instead of square brackets
# they are mutable, so we can add and remove elements
# they don't allow duplicate values
# they don't have indexes
# they are faster than lists
# they are useful for mathematical operations like union, intersection, difference, etc.
# they are useful for membership testing
# they are useful for removing duplicates from a list
# they are useful for mathematical operations like union, intersection, difference, etc.
# they are useful for membership testing
# they are useful for removing duplicates from a list

set_one = {1, 2, 3, 4, 5}
print(set_one)

# we can add elements to the set
set_one.add(6)
print(set_one)

# we can remove elements from the set
set_one.remove(6)
print(set_one)

# we can clear, delete, pop elements from the set
set_one.clear()
print(set_one)

set_two = {4, 5, 6, 7, 8}
print(set_two.pop())

# and exist the method discard, that is similar to remove, but it doesn't raise an error if the element is not found
set_two.discard(10)
print(set_two)

# we can use the same methods as in lists
print(len(set_one))
print(set_one.count(1))
print(set_one.index(1))


# we can realize mathematical operations with sets
set_two = {4, 5, 6, 7, 8}
print(set_one.union(set_two))
print(set_one.intersection(set_two))
print(set_one.difference(set_two))
print(set_two.difference(set_one))

# other method to use in a set are:
# isdisjoint, issubset, issuperset
print(set_one.isdisjoint(set_two))
print(set_one.issubset(set_two))
print(set_one.issuperset(set_two))


# excersice
#Sets - Exercise

#1. Check if ‘Eric’ and ‘John’ exist in friends
#2. combine or add the two sets 
#3. Find names that are in both sets
#4. find names that are only in friends
#5. Show only the names who only appear in one of the lists
#6. Create a new cars-list without duplicates

friends = {'John','Michael','Terry','Eric','Graham'}
my_friends = {'Reg','Loretta','Colin','John','Graham'}
cars =['900','420','V70','911','996','V90','911','911','S','328','900']


appear_erik = 'Eric' in friends
appear_john = 'John' in friends
print(appear_erik, appear_john)
names_in_bot = friends.intersection(my_friends)
print(names_in_bot)
only_in_friends = friends.difference(my_friends)
print(only_in_friends)
only_in_my_friends = my_friends.difference(friends)
print(only_in_my_friends)
only_in_one = friends.symmetric_difference(my_friends)
print(only_in_one)
cars_no_duplicates = list(set(cars))
print(cars_no_duplicates)