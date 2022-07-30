class Stack {
  constructor() {
    this.top = null;
    this.buttom = null;
    this.length = 0;
  }

  peek() {
    if (this.head) {
      return this.head;
    }
  }

  push(value) {
    const NewNode = {
      value: value,
      prev: null,
    };
    if (this.length === 0) {
      this.top = NewNode;
      this.buttom = NewNode;
    } else {
      const pointerHolder = this.top;
      this.top = NewNode;
      this.top.prev = pointerHolder;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.buttom) {
      //OR if(this.length === 0)
      this.buttom = null;
    }

    this.top = this.top.prev;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push(15);
myStack.push(16);
myStack.push(17);
myStack.push("shahin");
myStack.pop();
myStack.pop();
// myStack.pop();
// myStack.pop();
console.log(myStack);
