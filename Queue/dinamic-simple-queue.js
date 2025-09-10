class DinamicSimpleQueue {
  constructor() {
    this.capacity = 2;
    this.items = [];
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    // check if almost full
    if (this.rear === this.capacity - 1) {
      this.capacity = this.capacity * 2;
      this.rear++;
      this.items[this.rear] = value;
      return;
    }
    // check if start of the queue
    if (this.front === -1 && this.rear === -1) {
      this.front = 0;
      this.rear++;
      this.items[this.rear] = value;
      return;
    }
    this.rear++;
    this.items[this.rear] = value;
  }

  dequeue() {
    let lenghtArray = this.rear - this.front + 1;
    // check if last item
    if (this.front === this.rear) {
      let removedValue = this.items[this.front];
      this.front = -1;
      this.rear = -1;
      this.capacity = 2;
      return removedValue;
    }
    // check capacity to optimize the memory
    if (lenghtArray < this.capacity / 4 && this.front > this.capacity / 2) {
      let newIndex = 0; // index to reset the array
      // loop to take every value to a new array
      for (let i = this.front; i <= this.rear; i++) {
        this.items[newIndex] = this.items[i];
        newIndex++;
      }
      this.front = 0; // reset front
      this.rear = lenghtArray - 1; // rear goes to the end of the new array
      let removedValue = this.items[this.front];
      this.front++;
      return removedValue;
    }
    let removedValue = this.items[this.front];
    this.front++;
    return removedValue;
  }

  peek() {
    let frontValue = this.items[this.front];
    return frontValue;
  }
}
