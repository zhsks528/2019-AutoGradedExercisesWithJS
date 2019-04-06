// Write a function called "select".

// Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

// Notes:
// * If keys are present in the given array, but are not in the given object, it should ignore them.
// * It does not modify the passed in object.

// var arr = ['a', 'c', 'e'];
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// var output = select(arr, obj);
// console.log(output); // --> { a: 1, c: 3 }

function select(arr, obj) {
  var newObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (typeof obj[arr[i]] !== "undefined") {
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;
}

var arr = ["a", "c", "e"];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

var output = select(arr, obj);
console.log(output);
