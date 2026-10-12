# modules are files that contain python code and can be imported into other python files

# for example we can create a module with a function and import it into another file, or exist modules that we can import like math, random, etc.

import math
# we can add an alias to the module
import math as m
print(m.sqrt(16))

# if we just need a specific function from a module we can import it like this
from math import sqrt
print(sqrt(16))