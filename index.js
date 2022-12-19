import Node from "./node.js";
import LinkList from "./linkedList.js";

// EMPTY LIST
const list = new LinkList();

// NODES
const node_1 = new Node(1);
const node_2 = new Node(2);
const node_3 = new Node(3);
const node_4 = new Node(4);
const node_5 = new Node(5);
const node_6 = new Node(6);
const node_7 = new Node(7);

// FILLING LIST
list.prepend(node_1);
list.prepend(node_2);
list.prepend(node_3);

list.append(node_4);
list.append(node_5);
list.append(node_6);
list.append(node_7);

// list.append(node_1);

// console.log(list.head.nextNode, list.at(5).value);
// list.pop();
// list.pop();
// list.pop();

// console.log(list.tail.value, list.size);
// console.log(list.contains(2));
// console.log(list.find(2));
// console.log(list.find(4));

list.toString();
