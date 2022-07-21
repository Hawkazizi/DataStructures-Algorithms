const arr = [4, 3, 7, 1, 9, 9];
// it should return 1

///////////naive way !! nested loop O(n^2)
// function firstRecChar(array) {
//   const newarray = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return array[i];
//       }
//     }
//   }
// }

// console.log(firstRecChar(arr));

////Better solution //O(n)

const firstRecChar = function (input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
};

console.log(firstRecChar([1, 2, 3, 4, 5, 1]));
