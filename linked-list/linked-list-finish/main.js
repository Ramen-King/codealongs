

class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    append(value) {
        const newNode = new Node(value);

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            /*
                as long as the node's .next isn't null
                keep going to the next node
            */

            // const current = this.head;

            // while(current.next !== null) {
            //     current = current.next;
            // }

            // current.next = newNode;
        }

    }

    toString() {
        let str = '';
        const separator = ', ';
        
        let current = this.head;

        // Start with the head and keep going through each node's .next.
        // For each node, add its value and the separator to the string.
        while(current.next !== null) {
            str += current.value + separator
            current = current.next
        }
        
        str += current.value

        return str;
    }
    
    prepend(value) {
        const newNode = new Node(value);

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // const oldHead = this.head;
            // this.head = newNode;
            // this.head.next = oldHead;

            newNode.next = this.head;
            this.head = newNode;
        }
    }
    
    getAt() {
        
    }
    
    removeAt() {
        
    }

    insertAt() {
        
    }
}

// console.log(newNode);

const newList = new LinkedList();

newList.append(5);
newList.append(15);
newList.append(20);

newList.prepend(30);

console.log(newList.toString())

// console.log(newList.head.next);

// document.querySelector('.result').innerText = newList.head.value;