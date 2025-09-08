class Stack {
  constructor(capacity) {
    this.capacity = capacity; // max capacity of the pile
    this.items = []; // array to store the items
    this.top = -1; // index of the top
  }

  // add an item to the pile
  push(value) {
    if (this.top === this.capacity - 1) {
      console.log("Pile is full!");
      return;
    }
    this.top++;
    this.items[this.top] = value;
    console.log(this.items, `-> ${value} added.`);
  }

  // remove an item from the pile
  pop() {
    if (this.top === -1) {
      console.log("Pile is empty!");
      return;
    }
    console.log(`${this.items[this.top]} removed from the pile!`);
    let removedValue = this.items[this.top];
    this.top--;
    return removedValue;
  }

  // show the top item
  peek() {
    if (this.top === -1) {
      console.log("Pile is empty!");
      return;
    }
    console.log(`${this.items[this.top]} is the top item!`);
  }
}

const pile = new Stack(5);
pile.push(3);
pile.push(1);
pile.push(5);
pile.pop();
pile.push(3);
pile.push(2);
pile.push(6);
pile.push(3);
pile.peek();
