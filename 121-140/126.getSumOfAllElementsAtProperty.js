// Write a function called "getSumOfAllElementsAtProperty".

// Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the key, it should return 0.

// var obj = {
//   key: [4, 1, 8]
// };
// var output = getSumOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 13

function getSumOfAllElementsAtProperty(obj, key) {
  var sum = 0;
  if (!Array.isArray(obj[key]) || !obj[key]) {
    return 0;
  }
  for (var item in obj[key]) {
    sum += obj[key][item];
  }
  return sum;
}

var obj = {
  key: [4, 1, 8]
};

var output = getSumOfAllElementsAtProperty(obj, "key");
console.log(output);
