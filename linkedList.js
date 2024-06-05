class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
        this.listSize = 0;
    }

    prepend(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
            this.listSize++;
        }
    }

    append(value) {
        if (this.headNode === null) {
            this.prepend(value);
        } else {
            let lastNode = this.tailNode ? this.tailNode : this.headNode;
            lastNode.nextNode = new Node(value);
            this.tailNode = lastNode.nextNode;
            this.listSize++;
        }
    }

    size() {
        console.log(this.listSize);
    }

    head() {
        if (this.headNode) {
            console.log(`Head: ${this.headNode.value}`);
        } else {
            console.log("The list is empty");
        }
    }

    tail() {
        if (this.tailNode) {
            console.log(`Tail: ${this.tailNode.value}`);
        } else {
            console.log("The list is empty");
        }
    }

    at(index) {
        if (index > this.listSize - 1) {
            return console.log("The list does not have this index");
        } else if (index < 0) {
            return console.log("The index must be positive");
        }

        let currentNode = this.headNode;

        for (let i = 0; i < this.listSize; i++) {
            if (index === i) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
    }

    pop() {
        if (this.listSize === 1) {
            this.headNode = null;
            this.listSize--;
        } else {
            let currentNode = this.headNode;
            let previousNode = null;
            while (currentNode.nextNode != null) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            previousNode.nextNode = null;
            this.tailNode = previousNode;
            this.listSize--;
        }
    }

    contains(value) {
        let currentNode = this.headNode;
        if (currentNode) {
            while (currentNode != null) {
                if (currentNode.value === value) return true;
                currentNode = currentNode.nextNode;
            }
            return false;
        } else {
            return false;
        }
    }

    find(value) {
        let currentNode = this.headNode;
        let index = 0;
        if (currentNode) {
            while (currentNode != null) {
                if (currentNode.value === value) return index;
                currentNode = currentNode.nextNode;
                index++;
            }
            return null;
        }
    }

    toString() {
        let printString = "";
        let currentNode = this.headNode;
        if (currentNode) {
            while (currentNode != null) {
                printString += `( ${currentNode.value} ) -> `;
                currentNode = currentNode.nextNode;
            }
            printString += `null`;
            return console.log(printString);
        }
    }

    insertAt(value, index) {
        const newNode = new Node(value);
        const headNode = this.headNode;

        //check if there is another node in the location that the new node will be insert
        const oldNode = this.at(index);
        const previousNode = this.at(index - 1);

        if (oldNode) {
            // if the current node at the index location is the head node
            if (headNode === oldNode) {
                newNode.nextNode = headNode;
                this.headNode = newNode;
                this.listSize++;
            } else {
                // if the current node at the index location is not the head node
                // add the new node between the previous existing connection
                const nextNode = previousNode.nextNode;
                previousNode.nextNode = newNode;
                this.listSize++;

                // if there is a next node, insert it after the new node
                if (nextNode) {
                    newNode.nextNode = nextNode;
                }
            }
        } else {
            //check if there is a node on the previous index
            if (previousNode) {
                // check if the previous node has a next node
                const nextNode = previousNode.newNode;
                previousNode.nextNode = newNode;
                this.listSize++;
                if (nextNode) {
                    newNode.nextNode = nextNode;
                }
            } else if (index === 0) {
                // if there was no node on the location and there is no previous
                this.headNode = newNode;
                this.listSize++;
            } else {
                return console.log("this index is out of the list range");
            }
        }
    }

    removeAt(index) {
        const headNode = this.headNode;
        const nodeToRemove = this.at(index);

        // if the index provided exists and have a node
        if (nodeToRemove) {
            // if the node to remove is the head, remove it
            if (headNode === nodeToRemove) {
                this.headNode = nodeToRemove.nextNode;
                this.listSize--;
                return;
            } else {
                // if the node to remove is not the head, we need to store the
                // previous node before removing it
                let previousNode = this.headNode;

                while (previousNode.nextNode != nodeToRemove) {
                    previousNode = previousNode.nextNode;
                }

                // when the previous node is found, connect the previous node with
                // the next node, in relation to the node to be removed
                if (previousNode.nextNode === nodeToRemove) {
                    previousNode.nextNode = nodeToRemove.nextNode;
                    this.listSize--;
                    return;
                }
            }
        }
    }

    print() {
        console.log(`Head: ${this.headNode.value}`);
        if (this.tail != null) {
            console.log(`Tail: ${this.tailNode.value}`);
        } else {
            console.log(`Tail: ${this.tailNode}`);
        }
        console.log(`Size: ${this.listSize}`);
    }
}
