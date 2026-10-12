# to read a file we use the function open()
# the function open() takes two parameters: filename and mode
# exist a lot of modes to read a file, but the most common are:
# "r" - Read - Default value. Opens a file for reading, error if the file does not exist
# "a" - Append - Opens a file for appending, creates the file if it does not exist
# "w" - Write - Opens a file for writing, creates the file if it does not exist
# "x" - Create - Creates the specified file, returns an error if the file exists

# to read a file we use the function read()
my_file = open("ej.txt", "r")
print(my_file.read())
my_file.close()

# we can use read(13) to read the first 13 characters

#also exist the method readline() to read a single line

# and other methods like readlines() to read all lines, that return a list with all the lines in the document


# when we read a line we need to use the method close() to close the file

# but exist other way to read a file using the keyword "with"

with open("ej.txt", "r") as my_file:
    print(my_file.read())

# this way is better because the file is automatically closed


# finally exist method like splitlines() to split the file into lines
with open("ej.txt", "r") as my_file:
    print(my_file.read().splitlines())


