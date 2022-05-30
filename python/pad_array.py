#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None): 
    size = min_size - len(array)
    result = []
    if size <= 0:
        return array
    else: result = [value] * min_size
    for i,j in enumerate(array):
        result[i] = j
    return result








#       pseudocode

# first we need to obtain the input arrays length, and compare it with the min size. If it's smaller return the original array.

# second we create a result array of the size asked in the input filled with the value asked.

# last we replace the result values with the input array ones.
