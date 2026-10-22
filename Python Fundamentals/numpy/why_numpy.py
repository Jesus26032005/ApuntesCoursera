# numpy is a module that provides functions for working with arrays
# this is important because it is faster than using lists and convenient for mathematical operations

import numpy as np

# to create an array we use the array() function
arr = np.array([1, 2, 3, 4, 5])
print(arr)

# we can also create an array with a range of numbers
arr = np.arange(1, 6)
print(arr)

# we can also create an array with a range of numbers with a step
arr = np.arange(1, 6, 2)
print(arr)

# if we put two list in the function we create a 2D array
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr)

# to check the dimensions of an array we use the ndim attribute
print(arr.ndim)

# to check the shape of an array we use the shape attribute
print(arr.shape)

# to check the data type of an array we use the dtype attribute
print(arr.dtype)

# to check the size of an array we use the size attribute
print(arr.size)

# we can also create an array with zeros
arr = np.zeros(5)
print(arr)

# we can also create an array with ones
arr = np.ones(5)
print(arr)

# we can also create an array with random numbers
arr = np.random.random(5)
print(arr)

# we can also create an array with random integers
arr = np.random.randint(1, 10, 5)
print(arr)

# we can also create an array with random integers
arr = np.random.randint(1, 10, (2, 3))
print(arr)

# if we want diferrent forms to create the arrays we can add parameters
arr = np.zeros((2, 3))
print(arr)

arr = np.ones((2, 3))
print(arr)

arr = np.random.random((2, 3))
print(arr)

arr = np.random.randint(1, 10, (2, 3))
print(arr)


# np.eye() creates an identity matrix
arr = np.eye(3)
print(arr)

# np.full() creates an array with a specified value
arr = np.full((2, 3), 5)
print(arr)

# we can especify the type of the array
arr = np.full((2, 3), 5, dtype=int)
print(arr)

#np.diag creates a diagonal matrix
arr = np.diag([1, 2, 3])
print(arr)

# np.tile creates a matrix by repeating an array
arr = np.tile([1, 2, 3], 2)
print(arr)

# np.random.random() creates an array with random numbers
arr = np.random.random((2, 3))
print(arr)