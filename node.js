class Node {
  #value = null;
  #nextNode = null;

  constructor(value) {
    this.value = value;
  }

  get value() {
    return this.#value;
  }

  set value(_new) {
    this.#value = _new;
  }

  get nextNode() {
    return this.#nextNode;
  }

  set nextNode(_new) {
    this.#nextNode = _new;
  }
}

export default Node;
