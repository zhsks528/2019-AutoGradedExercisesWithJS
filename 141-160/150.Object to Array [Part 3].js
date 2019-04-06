// Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this: Argument:

// {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }

// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]

// Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

// E.g., it should also be able to handle this, or any other object containing simple key-value pairs.

// {
//   species: 'canine',
//   name: 'Bowser',
//   weight: 45
// }

function convertObjectToList(obj) {
  var aArray = [];

  for (var item in obj) {
    var bArray = [];
    bArray.push(item);
    bArray.push(obj[item]);
    aArray.push(bArray);
  }
  return aArray;
}

var obj = {
  name: "Holly",
  age: 35,
  role: "producer"
};

var output = convertObjectToList(obj);
console.log(output);
