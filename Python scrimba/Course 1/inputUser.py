# To get user input, we use the input() function
# The input() function returns a string, so we need to convert it to the type we need

# We can add a message to the input() function to prompt the user
name = input("What is your name? ")
print("Hello " + name)

# if we need other type we need to convert with the casting functions
age = int(input("What is your age? "))
print("You are " + str(age) + " years old")

# other casting functions:
# int() - Convert to integer
# float() - Convert to float
# str() - Convert to string , in this case we don't need this function because input returns a string

second_name = input("What is your second name? ".title())
print("Your second name is " + second_name)

# Distance converter converting kilometers to miles 
input_first_name = input("Enter the first name: ".title())
input_kilometers = input("Enter the kilometers: ".title())
miles = float(input_kilometers)/1.609

print(f"Your name is {input_first_name}, and {input_kilometers} kms are equal to { miles}")
