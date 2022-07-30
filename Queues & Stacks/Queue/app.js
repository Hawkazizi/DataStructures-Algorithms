// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(value) {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }

//   peek() {
//     if (this.first) {
//       return this.first;
//     }
//   }
//   enqueue(value) {
//     const NewNode = new Node(value);
//     if (!this.first) {
//       this.first = NewNode;
//       this.last = NewNode;
//     } else {
//       this.last.next = NewNode;
//       this.last = NewNode;
//     }
//     this.length++;
//     return this;
//   }

//   dequeue() {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.length--;
//     return this;
//   }
// }

// const myQueue = new Queue();
// // myQueue.enqueue("hi");
// // myQueue.enqueue("hello");
// // myQueue.enqueue(12);
// // myQueue.dequeue();
// // console.log(myQueue.peek());
// console.log(myQueue);

var numberOfSteps = function (num) {
  if (num % 2 === 0) {
    return num / 2;
  } else {
    return (num - 1) / 2;
  }
};
console.log(numberOfSteps(8));
