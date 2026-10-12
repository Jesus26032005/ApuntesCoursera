# list compresion is a form to create lists in a more concise way

# the basic syntax is:
# [expression for item in iterable if condition]

# the normal form is
old_list = [1, 2, 3, 4, 5]
new_list = []
for item in old_list:
    if item % 2 == 0:
        new_list.append(item)

# the compression is
new_list = [item for item in old_list if item % 2 == 0]

# others examples
string ="spam"
new_list2= [(letter, number) for letter in string for number in range(1, 4)]
print(new_list2)


# also exist the compression with dictionaries
# the basic syntax is:
# {key_expression: value_expression for item in iterable if condition}

# the normal form is
old_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
new_dict = {}
for key, value in old_dict.items():
    if value % 2 == 0:
        new_dict[key] = value

# the compression is
new_dict = {key: value for key, value in old_dict.items() if value % 2 == 0}

print(new_dict)


# if we take 2 list the compression would be:
list1 = [1, 2, 3, 4, 5]
list2 = ['a', 'b', 'c', 'd', 'e']
new_dict = {key: value for key, value in zip(list1, list2)}
print(new_dict)