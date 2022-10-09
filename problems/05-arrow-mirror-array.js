/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:


***********************************************************************/
// take in array as agr
// return new array
const arrowMirrorArray = (array) => {
  let arr = array

  for (let i = array.length -1 ; i >= 0 ; i--){
    let mirror = array[i]
    arr.push(mirror)

  }
   return arr

}






arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
// let arrowMirrorArray = (array) => {
// let arr=array

// for (let j=array.length-1; j>=0; j--) {
// let revElement=array[j]

// arr.push(revElement)
// }
//   return arr;
// }
