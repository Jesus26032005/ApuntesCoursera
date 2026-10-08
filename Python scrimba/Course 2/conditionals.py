# we use conditionals to make decisions in our programs for example, if success or not a determined action is taken

# the first conditional is the if statement
# the syntax is:
# if condition:
#     block of code

numero = 5
if numero == 5:
    print("The number is 5")

# the second conditional is the if-else statement
# the syntax is:
# if condition:
#     block of code
# else:
#     block of code

if numero == 5:
    print("The number is 5")
else:
    print("The number is not 5")

# and the third conditional is the if-elif-else statement
# the syntax is:
# if condition:
#     block of code
# elif condition:
#     block of code
# else:
#     block of code

numero = 15
if numero == 5:
    print("The number is 5")
elif numero == 10:
    print("The number is 10")
else:
    print("The number is not 5 or 10")


# the last is match-case statement, this is like a switch case in other languages
# the syntax is:
# match variable:
#     case value:
#         block of code
#     case value:
#         block of code
#     case _:
#         block of code
match numero:
    case 5:
        print("The number is 5")
    case 10:
        print("The number is 10")
    case _: # represents the default case
        print("The number is not 5 or 10")


def num_days(month):
    if month in ['jan', 'mar', 'may', 'jul', 'aug', 'oct', 'dec']:
        print('number of days in',month,'is',31)
    elif month == 'feb':
        print('number of days in',month,'is',28)
    elif month in ['apr', 'jun', 'sep', 'nov']:
        print('number of days in',month,'is',30)

num_days('oct')