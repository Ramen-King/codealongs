

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
    
    prepend() {
        
    }
    
    getAt() {
        
    }
    
    removeAt() {
        
    }
}

// console.log(newNode);

const newList = new LinkedList();

newList.append(5);
newList.append(15);
newList.append(20);

console.log(newList.head.next);

document.querySelector('.result').innerText = newList.head.value;