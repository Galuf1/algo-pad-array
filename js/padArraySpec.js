// Write unit tests!
var shallowEqualArrays = require("shallow-equal/arrays")
var pad = require("./padArray")

console.log(shallowEqualArrays(pad.padArray([1,2,3],5,"apple"),[1,2,3,"apple","apple"]))
console.log(shallowEqualArrays(pad.padArray([1,2,3],3,"apple"),[1,2,3]))
console.log(shallowEqualArrays(pad.padArray([1,2,3],5),[1,2,3,null,null]))