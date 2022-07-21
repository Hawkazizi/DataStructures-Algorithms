class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    // const array = this.data[address];
    // return array[0][1];

    // OR
    const CurrentBucket = this.data[address];

    if (CurrentBucket) {
      for (let i = 0; i < CurrentBucket.length; i++) {
        if (CurrentBucket[i][0] === key) {
          return CurrentBucket[i][1];
        }
      }
    }
  }
  delete(address) {
    if (this.data[address]) {
      const arrr = this.data[address].shift();
      arrr.pop();
      arrr.pop();

      // console.log(arrr2);
      // const arrr3 = arrr2.pop();

      return arrr;
    } else {
      alert("this data does not exists");
    }
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("Shahin", 10000);
myHashTable.set("Sina", 540);
myHashTable.set("Azizi", 5000);

console.log(myHashTable._hash("shahin"));
console.log(myHashTable.data);
console.log(myHashTable.get("Azizi"));
console.log(myHashTable.get("Sina"));
// myHashTable.delete(16);
console.log(myHashTable.data);
console.log(myHashTable.keys());

////////////// fix this problem later : if you try to delete any arrays you won't be able to get the keys!!!
//////////////another bug(cause cant't access internet rn :) ): while trying to delete an array , can't delete the empty array, must be a good built-in method for that!!!!
/////////////learnt from one of udemys courses
