class LinkList {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  get head() {
    return this.#head;
  }

  get size() {
    return this.#size;
  }

  get tail() {
    if (this.head === null) return;

    let curr = this.head;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }

    return curr;
  }

  at(index) {
    if (index > this.size || index < 1) return -1;

    if (index === 1) {
      return this.head;
    }

    if (index === this.size) {
      return this.tail;
    }

    let curr = this.head;
    for (let i = 1; i < index; i++) {
      curr = curr.nextNode;
    }

    return curr;
  }

  pop() {
    if (this.head === null) return;

    const lastNode = this.tail;
    this.at(this.size - 1).nextNode = null;
    this.#size--;

    return lastNode;
  }

  append(node) {
    if (this.head === null) {
      this.prepend(node);
      return;
    }

    let curr = this.head;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }

    node.nextNode = curr.nextNode;
    curr.nextNode = node;
    this.#size++;
  }

  prepend(node) {
    node.nextNode = this.head;
    this.#head = node;
    this.#size++;
  }

  contains(value) {
    if (this.head === null) return;

    let curr = this.head;
    while (curr.nextNode !== null) {
      if (curr.value === value) {
        return true;
      }

      curr = curr.nextNode;
    }

    return curr.value === value;
  }

  find(value) {
    if (this.head === null) return;

    let curr = this.head;
    let index = 0;
    while (curr.nextNode !== null) {
      if (curr.value === value) {
        index++;
        return index;
      }

      index++;
      curr = curr.nextNode;
    }

    return curr.value === value ? index + 1 : null;
  }

  toString() {
    if (this.head === null) return;

    let curr = this.head;
    let _string = "";

    while (curr.nextNode !== null) {
      _string += `( ${curr.value} ) -> `;
      curr = curr.nextNode;
    }

    _string += `( ${curr.value} ) -> ${curr.nextNode}`;
    console.log(_string);
  }
}

export default LinkList;
