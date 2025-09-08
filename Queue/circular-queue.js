class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    // check if the queue is full
    if (
      (this.front === 0 && this.rear === this.capacity - 1) ||
      this.front === this.rear + 1
    ) {
      console.log("Queue is full!");
      return;
    }
    // check if is the first element on insertion
    if (this.front === -1 && this.rear === -1) {
      this.front = 0;
      this.rear++;
      this.items[this.rear] = value;
      console.log(this.items, `-> ${value} added.`);
      return;
    }
    // check if rear is at the end of the queue
    if (this.rear === this.capacity - 1) {
      this.rear = 0;
      this.items[this.rear] = value;
      console.log(this.items, `-> ${value} added.`);
      return;
    }
    this.rear++;
    this.items[this.rear] = value;
    console.log(this.items, `-> ${value} added.`);
  }

  dequeue() {
    // check if the queue is empty
    if (this.front === -1 && this.rear === -1) {
      console.log("The queue is already empty.");
      return;
    }
    // check if it's the last value in the queue
    if (this.front === this.rear) {
      let removedValue = this.items[this.front];
      this.front = -1;
      this.rear = -1;
      console.log(`${removedValue} was the last value in the queue.`);
      console.log("Resetting the queue.");
      return removedValue;
    }
    // check if the front is in the last position of the queue
    if (this.front === this.capacity - 1) {
      let removedValue = this.items[this.front];
      this.front = 0;
      console.log(`${removedValue} was removed from the queue.`);
      return removedValue;
    }
    let removedValue = this.items[this.front];
    this.front++;
    console.log(`${removedValue} was removed from the queue.`);
    return removedValue;
  }

  // print the front value
  peek() {
    let frontValue = this.items[this.front];
    console.log(`${frontValue} is the front value.`);
    return frontValue;
  }
}

const queue = new CircularQueue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.rear);
queue.dequeue();
console.log(queue.front);
queue.enqueue(5);
queue.dequeue();
