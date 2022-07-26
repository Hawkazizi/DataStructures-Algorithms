//traditional way

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 6,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

// console.log(myLinkedList);

//////////////Using Classes

class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  apprend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };

    this.head = newNode;
    this.length++;
    return this;
  }

  //first approach

  // insert(index, value) {
  //   if (index >= this.length) {
  //     this.apprend(value);
  //   } else if (index === 0) {
  //     // this.head.value = value;
  //     this.prepend(value);
  //   }
  //   const NewNode = {
  //     value: value,
  //     next: null,
  //   };
  //   const NodeBeforePurpose = this.findingtheNodeAfterMainOne(index - 1);
  //   const pointerHolder = NodeBeforePurpose.next;
  //   NodeBeforePurpose.next = NewNode;
  //   NewNode.next = pointerHolder;

  // }

  // findingtheNodeAfterMainOne(index) {
  //   let counter = 0;
  //   let currNode = this.head;
  //   while (counter !== index) {
  //     currNode = currNode.next;
  //     counter++;
  //   }
  //   return currNode;
  // }

  // second one
  insert(index, value) {
    const NewNode = {
      value: value,
      next: null,
    };

    // NBNN => Node Before New Node
    // NANN => Node After New Node

    // Finding
    const NBNN = this.finder(index - 1);
    const NANN = this.finder(index + 1);

    // Linking
    NBNN.next = NewNode;
    NewNode.next = NANN;

    //////////////////////////////////

    this.length++;
    return this;
  }

  finder(index) {
    let counter = 0;
    let currNode = this.head;

    while (counter !== index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  delete(index) {
    const NBNN = this.finder(index - 1);
    const NANN = this.finder(index + 1);

    /////because js in garbage collector, so when one node points to another node, the node that first was pointed to , will get deleted automaticlly!

    NBNN.next = NANN;
    this.length--;
    return this;
  }

  pop() {
    let currNode = this.head;
    let newTail = currNode;
    //accessing oneLeftToLastOne
    while (currNode.next) {
      newTail = currNode;
      currNode = currNode.next;
    }
    this.tail = newTail;
    //becase of garbage collector => when next of oneLeftToLast equals to null automatically last item gets removed
    this.tail.next = null;
    this.length--;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    console.log(this.tail);
    let second = first.next;

    while (second) {
      const temporary = second.next;
      second.next = first;
      first = second;
      second = temporary;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new linkedList(10);

myLinkedList.prepend("0.16");
myLinkedList.apprend(11);
myLinkedList.apprend(111);
myLinkedList.apprend(1111);
// myLinkedList.insert(10, 11111);
// myLinkedList.insert(0, 3);
myLinkedList.insert(1, 77);
myLinkedList.insert(3, 80);
// myLinkedList.delete();
// myLinkedList.pop();
myLinkedList.pop();
myLinkedList.reverse();
console.log(myLinkedList);
