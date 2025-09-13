class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    // check if list is empty
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);
    const aux = this.head;
    this.head = newNode;
    this.head.next = aux;
  }

  display() {
    const displayData = [];
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      displayData[index] = currentNode.data;
      index++;
      currentNode = currentNode.next;
    }
    console.log(displayData);
  }

  size() {
    if (this.head === null) {
      console.log("The list is empty.");
      return;
    }
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      index++;
    }
    console.log(`Size ${index}.`);
  }

  get(index) {
    if (this.head === null) {
      console.log("List empty.");
      return;
    }
    let currentNode = this.head;
    while (index !== 0) {
      index--;
      currentNode = currentNode.next;
      if (currentNode === null) {
        console.log("Index not found.");
        return;
      }
    }
    console.log(currentNode.data);
    return currentNode;
  }

  indexOf(data) {
    if (this.head === null) {
      console.log("Empty list.");
      return;
    }
    let currentNode = this.head;
    let index = 0;
    let count = 0;
    let indexArray = [];
    while (currentNode !== null) {
      if (currentNode.data === data) {
        indexArray[count++] = index;
      }
      index++;
      currentNode = currentNode.next;
    }
    if (count > 0) {
      console.log(indexArray);
      return indexArray;
    } else {
      console.log(`${data} not found in the list.`);
    }
  }

  removeFirst() {
    if (this.head === null) {
      console.log("Empty list.");
      return;
    }
    let removedData = this.head;
    this.head = this.head.next;
    console.log(`${removedData.data} removed.`);
    return removedData;
  }

  removeLast() {
    if (this.head === null) {
      console.log("Empty list.");
      return;
    }
    let currentNode = this.head;
    if (this.head.next === null) {
      let removedData = this.head;
      this.head = null;
      console.log(`${removedData.data} removed.`);
      return removedData;
    }
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    let removedData = currentNode.next;
    currentNode.next = null;
    console.log(`${removedData.data} removed.`);
    return removedData;
  }

  removeAt(index) {
    if (this.head === null) {
      console.log("Empty list.");
      return;
    }
    if (index === 0) {
      const removedData = this.head.data;
      this.head = this.head.next;
      console.log(`${removedData} removed.`);
      return removedData;
    }
    let currentNode = this.head;
    let prevNode = null;
    let count = 0;
    while (currentNode !== null && count < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    if (currentNode === null) {
      console.log(`${index} is not a valid index.`);
      return;
    }
    prevNode.next = currentNode.next;
    console.log(`${currentNode.data} removed.`);
    return currentNode;
  }

  contains(data) {
    if (this.head === null) {
      console.log("Empty list.");
      return;
    }
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        console.log(`${data} is in the list.`);
        return true;
      }
      currentNode = currentNode.next;
    }
    console.log(`${data} is not in the list.`);
    return false;
  }

  reverse() {
    if (this.head === null) {
      console.log("Empty list.");
      return;
    }
    const reversedList = new LinkedList();
    let currentNode = this.head;
    while (currentNode !== null) {
      reversedList.prepend(currentNode.data);
      currentNode = currentNode.next;
    }
    reversedList.display();
    return reversedList;
  }
}

const list = new LinkedList();
list.append(5);
list.append(3);
list.append(2);
list.append(7);
list.display();
list.size();
