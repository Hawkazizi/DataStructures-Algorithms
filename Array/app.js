// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   add(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   delete(item) {
//     const deletion = this.data[item];
//     this.shiftItems(item);
//     return deletion;
//   }
//   shiftItems(item) {
//     for (let i = item; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const shahin = new MyArray();

//////////////////////////////////////////////////////////////////////Reversion///////////////////////////////////////////////////////////////

// function reversion(str) {
//   let arrs = [...str];
//   arrs.reverse();
//   return arrs;
// }

// console.log(reversion("shahin"));

///////Or

// function reversion(str) {
//   BackwardsArr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     BackwardsArr.push(str[i]);
//   }
//   return BackwardsArr.join("");
// }

// console.log(reversion("shahin"));

///////Or

// const reversion = (str) => [...str].reverse().join("");
// console.log(reversion("hi this is me"));

//////////////////////////////////////////////////////////////Merging sorted arrays/////////////////////////////////////////////////////////////////

const arr1 = [4, 5, 6, 9];
const arr2 = [2, 7, 9, 10, 13];

// const sorting = function (arr1, arr2) {
//   const all = [...arr1, ...arr2];
//   all.sort((a, b) => a - b);
//   console.log(all);
// };

// sorting(arr1, arr2);

/////////////////Or we can just create an empty array and loop throught both given arrays and pick the smaller element every time that we loop over them

// function sorting(arr1, arr2) {
//   const sortedArray = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] > arr2[j]) {
//         sortedArray.push(arr2[j]);
//       } else {
//         return;
//       }
//     }
//   }
//   console.log(sortedArray);
// }
// console.log(sorting(arr1, arr2));

////////////////////////////////// Couldn't solve it 😁

//////////////////////Or

// function sortedArr(arr1, arr2) {
//   const SortedArray = [];
//   let array1stItem = arr1[0];
//   let array2ndItem = arr2[0];
//   let i = 1;
//   let j = 1;

//   //checking input
//   if (arr1.length === 0) {
//     return arr2;
//   }
//   if (arr2.length === 0) {
//     return arr1;
//   }

//   while (array1stItem || array2ndItem) {
//     if (!array2ndItem || array1stItem < array2ndItem) {
//       SortedArray.push(array1stItem);
//       array1stItem = arr1[i];
//       i++;
//     } else {
//       SortedArray.push(array2ndItem);
//       array2stItem = arr2[j];
//       j++;
//     }
//   }
//   return SortedArray;
// }

// sortedArr(arr1, arr2);
