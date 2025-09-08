class SimpleQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if (this.rear === this.capacity - 1) {
      console.log("Queue is full!");
      return;
    }
    if (this.front === -1 && this.rear === -1) {
      this.front++;
      this.rear++;
      this.items[this.rear] = value;
      console.log(this.items, `-> ${value} added.`);
      return;
    }
    this.rear++;
    this.items[this.rear] = value;
    console.log(this.items, `-> ${value} added.`);
  }

  dequeue() {
    if (this.front > this.rear) {
      console.log("The queue is already empty.");
      return;
    }
    if (this.front === this.rear) {
      let removedValue = this.items[this.front];
      this.front = -1;
      this.rear = -1;
      console.log(`${removedValue} was the last value in the queue.`);
      console.log("Resetting the queue.");
      return removedValue;
    }
    let removedValue = this.items[this.front];
    this.front++;
    console.log(`${removedValue} is out of the queue.`);
    return removedValue;
  }

  peek() {
    let frontValue = this.items[this.front];
    console.log(`${frontValue} is the front value.`);
    return frontValue;
  }
}

const queue = new SimpleQueue(2);
queue.enqueue(10);
queue.enqueue(20);
queue.dequeue();
queue.dequeue();
