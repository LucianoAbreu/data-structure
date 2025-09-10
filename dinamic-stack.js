class DinamicStack {
  constructor() {
    this.capacity = 1;
    this.items = [];
    this.top = -1;
  }

  push(value) {
    // check if stack is full
    if (this.top === this.capacity - 1) {
      this.capacity = this.capacity * 2;
      this.top++;
      this.items[this.top] = value;
      console.log(this.items, `-> ${value} added to the pile.`);
      return;
    }
    this.top++;
    this.items[this.top] = value;
    console.log(this.items, `-> ${value} added to the pile.`);
  }

  pop() {
    //check if pile is empty
    if (this.top === -1) {
      console.log("The pile is alredy empty.");
      return;
    }
    // check if 25% of the pile is empty
    if (this.top < this.capacity / 4) {
      let removedValue = this.items[this.top];
      this.capacity = this.capacity / 2;
      this.top--;
      console.log(removedValue, "removed from the pile.");
      return removedValue;
    }
    let removedValue = this.items[this.top];
    this.top--;
    console.log(removedValue, "removed from the pile.");
    return removedValue;
  }

  peek() {
    let topValue = this.items[this.top];
    console.log(`${topValue} is the top value of the pile.`);
    return topValue;
  }
}

const stack = new DinamicStack();
stack.push(1); // capacity vai para quanto?
stack.push(2); // e agora?
stack.push(3); // e agora?
stack.pop();
console.log(stack.items);
stack.peek();
stack.push(4); // e agora?
