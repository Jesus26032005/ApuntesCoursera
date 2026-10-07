# list is a data structure that stores a collection of items, in python don't exist arrays, lists are used instead, and don't require to specify the size and can store different data types

list_one = [1, 2, 3, 4, 5]
print(list_one)

# to access an item in the list, we use the index of the item
print(list_one[0])

# to access the last item in the list, we use the index -1
print(list_one[-1])

# to access a range of items in the list, we use the index of the items
print(list_one[0:3])

# to access all items from the beginning to the end, we use the index 0:
print(list_one[0:])

# to access all items from the beginning to the end, we use the index -1:
print(list_one[:-1])

# to obtain the length of the list we use the function len()
print(len(list_one))

# to obtain the number of occurrences of an item in the list we use the function count()
print(list_one.count(1))

# to order the list we use the function sort()
list_one.sort()
print(list_one)
# or in reverse order
list_one.sort(reverse=True)
print(list_one)

# to reverse the list we use the function reverse()
list_one.reverse()
print(list_one)

# to fin the max, min and sum of the list we use the functions max(), min() and sum()
print(max(list_one))
print(min(list_one))
print(sum(list_one))

# to obtain the index of an item in the list we use the function index()
print(list_one.index(1)) # returns the index of the first occurrence of the item

# the method append add a new element to the end of the list
list_one.append(6)
print(list_one)

# the method extend adds multiple elements to the end of the list
list_one.extend([7, 8, 9])
print(list_one)

# the method insert adds an element at a specific index
list_one.insert(0, 0)
print(list_one)

# the method remove removes an element from the list
list_one.remove(0) #delete the first occurrence of the element
print(list_one)

# the method pop removes the last element from the list
list_one.pop()# we can also specify the index of the element to remove like list_one.pop(0)
print(list_one)

# the method clear removes all elements from the list
list_one.clear()
print(list_one)

# the world del can be used to delete an item from the list
#del list_one[0]
print(list_one)

# and the world del can be used to delete a range of items from the list
#del list_one[0:3]
print(list_one)

# to copy a list we can use the method copy()
list_two = list_one.copy() # it create a new list with other reference in memory
print(list_two)

# to copy a list we can use the operator :
list_three = list_one[:]
print(list_three)

# to copy a list we can use the function list()
list_four = list(list_one)
print(list_four)


# exercise
sales_w1 = [7,3,42,19,15,35,9]
sales_w2 = [12,4,26,10,7,28]
additional_day = float(input("Enter the sales for the additional day: "))
sales = []
sales.extend(sales_w1)
sales.extend(sales_w2)
sales.append(additional_day)
total = sum(sales)
best_day = max(sales)
worst_day = min(sales)
print(sales)
print(total)
print(best_day)
print(worst_day)


# we can create a list from a string using the split() method
string = "Hello World"
list_string = string.split()
print(list_string)

# the method split can receive a parameter to specify the separator
string = "Hello,World"
list_string = string.split(",")
print(list_string)

# opposite to split() we have join(), and create a string from a list
string = "Hello World"
list_string = string.split()
print("".join(list_string))
# we can specify the separator
string = "Hello,World"
list_string = string.split(",")
print(",".join(list_string))