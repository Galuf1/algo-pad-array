// REMEMBER TO PSEUDOCODE
exports.padArray = (array, minSize, value=null) => {
    const diff = minSize - array.length
    if (diff <= 0){
        return array
    }
    result = new Array(minSize).fill(value)
    
    for (let i = 0; i < array.length; i++){
        result[i] = array[i]
    }
    
    return result
}
/* first get the size of the array versus the minSize, if it's under 1 return the input array

second create an array of the minSize length filled with the value asked

last we assing the values of the input array into the result array*/