
/* 
# singly linked--list

# doubley liked--list

# Nodes
  # value
  # next => Node:
              # value
              # next => null

*/

const linkedList = {

  lesson1() {
    let result = null;

    class Node<T> {

      data: T;
      next: Node<T> | null;

      constructor(data: T) {
        this.data = data;
        this.next = null;
      }
    }

    class LinkedList<T> {
      head: Node<T> | null;
      tail: Node<T> | null;
      size: number;

      constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
      }

      // add a new node to the end of the linked--list

      // O(n)
      public add(data: T): void {
        const newNode: Node<any> = new Node(data);

        // if: head empty
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        }
        else {

          if (this.tail) {
            this.tail.next = newNode;
            // set new tail
            this.tail = newNode;
          }

          // get the last node =: node.next === null
          /* let currentNode = this.head;
          while (currentNode.next !== null) {
            // keep getting the node.next , till: node.next === null
            currentNode = currentNode.next;
          }

          // set last_node.next = newNode
          currentNode.next = newNode; */
        }

        this.size++;
      }

      // remove a node by data
      public remove(data: T): void {
        // if the list is empty:
        if (!this.head) return;

        // keep track of the prev node: 
        // it's null for head 
        let prev: Node<any> | null = null;
        let currentNode: Node<any> | any = this.head; 
 
        // loop over the list to the last_node
        while (true) {
          console.log(currentNode.data)

          // node was found
          if (currentNode.data === data) {
            // if: target_value is the head: remove the head: head = head.next
            if (prev === null) {
              this.head = currentNode.next;
              // also: remove the tail => which is the same as head
              if (currentNode === this.tail) this.tail = prev; // or null
            }
            // prev.next => current.next => nextNode 
            else {
              prev.next = currentNode.next;

              // if: removed the tail =: set tail = prev_node
              if (currentNode === this.tail) this.tail = prev;
            }

            this.size--;
            return;
          }
          
          // if: tail =: return;
          if (currentNode.next === null) break;

          // keep the previous node
          prev = currentNode;
          // move to the next node on each loop
          currentNode = currentNode?.next;
        }
      }

      // add to head
      public prepend(data: T) {
        const newNode = new Node<T>(data);
        const oldHead = this.head;

        // if: list is empty
        if (!this.head && !this.tail) {
          this.head = newNode;
          this.tail = newNode;
          this.size++;
          return;
        }

        // when: head === tail =: one element in the list
        if (this.tail === this.head) this.tail = oldHead;

        // more than one element in the list =: tail is not effected
        newNode.next = oldHead;
        this.head = newNode;
        this.size++;
      }

      /* 
      // insert: {0, 1, 2}
      
      if: index = 1
      keep = 1;
      0: {next: newNode} and newNode: {next: 1}
      */
      public insert(index: number, data: T): void {
        let newNode: Node<T> = new Node(data); 
        let curr: Node<T> | any = this.head;
        let prev: Node<T> | any = null;

        // index is out of bound
        if (index >= this.size) return;

        // if list empty
        if (!this.head && !this.tail) return;

        for (let i=0; i < (index + 1); i++) {
          console.log(i, '--', curr, index);

          // if: at target--index
          if (i === index) {
            // if: head === tail =: one element
            if (this.size === 1) {
              newNode.next = curr;
              this.head = newNode;
              // this.tail = old this.head
            }

            // index = 0 and we have to elments: [node-1, node-2]
            if (prev === null) {
              //const oldHead = curr;
              newNode.next = curr;
              this.head = newNode;
            }

            // any other index: > 0
            if (index > 0) {
              prev.next = newNode;
              newNode.next = curr;
            }

            // if: index found and inserted 
            this.size++;
          }

          //if (curr.next === null) break;

          if (curr?.next) {
            prev = curr;
            curr = curr.next;
          }
        }
      }

      // reverse a singly--linked--list
      public reverse(): void {

        let prev: Node<T> | null = null;
        let current: Node<T> | any = this.head;
        // keep the current.next
        let next: Node<T> | null = null;

        // list empty
        if (!current) return;

        while (true) {
          if (current === null) break;

          // set head to tail
          if (current === this.head) this.tail = current;

          next = current.next;
          // reverse the pointer
          current.next = prev;

          prev = current;
          // move to next node
          //  current will be null at the end
          current = next;
        }

        // prev has the last node (tail)
        this.head = prev;
      }

      // print value of each node
      public print(): Array<T> | [] {
        // list is empty
        if (!this.head) return [];
        let current: Node<T> | null = this.head;
        const values: T[] = [];

        while(true) {
          values.push(current.data);

          if (current.next === null) break;

          // go to next node
          current = current.next;
        }

        return values;
      }
    }

    const list1 = new LinkedList();

    list1.add('a');
    list1.add('b');
    list1.add('c');
    list1.add('d');
    //list1.add('e');

    //list1.prepend('r');
    //list1.prepend('t');
    //list1.prepend('y');

    //list1.remove('b');
    //list1.remove('e');

    //list1.insert(0, 'sex');

    list1.reverse();

    console.log(list1.head, list1.tail);
    console.log(list1.size);
    result = list1.print();
    //result = list1.size;
    //console.log(list1.head)

    console.log(result);
  },

  doublyLinkedList() {
    let result = null;
    
    class Node<T> {
      data: T;
      next: Node<T> | null;
      prev: Node<T> | null;

      constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
      }
    }

    class DoublyLinkedList<T> {
      head: Node<T> | null;
      tail: Node<T> | null;
      size: number;

      constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
      }

      public append(data: T): void {
        const newNode: Node<T> = new Node(data);

        // if list empty
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        }
        else {
          // this if is for ts error
          if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
          }
        }

        this.size++;
      }

      public remove(data: T): void {
        let current: Node<T> | null = this.head;

        while (current !== null) {

          if (current.data === data) {

            // if: {node} one node
            if (current === this.head && current === this.tail) {
              this.head = null;
              this.tail = null;
            }
            // if: {node-1, node-2} more than one node
            else if (current === this.head) {
              // ehck if head node is not the only node and there is a next node
              if (this.head && this.head.next) {
                // remove old head
                this.head = this.head.next;
                // first node does not have a previous
                this.head.prev = null;
              }
            }
            // removing the tail
            else if (current === this.tail) {
              // tail !== head =: first node
              if (this.tail && this.tail.prev) {
                this.tail = this.tail.prev;
                // new tail 
                this.tail.next = null;
              }
            }
            // remove a node that is not the first node or last node
            else {
              // if: has prev and next =: it's not first or last
              if (current.prev && current.next) {
                // (node-1).next = curr.next => (curr) => (node-3).prev = curr.prev
                current.prev.next = current.next;
                current.next.prev = current.prev;
              }
            }

            this.size--;
            // node removed
            return;
          }

          // go to next node
          current = current.next;
        }
      }

      public print(): T[] {
        const values: T[] = [];
        let current: Node<T> | null = this.head;
    
        while (current !== null) {
          values.push(current.data);
          current = current.next;
        }
    
        return values;
      }
    }

    const list2 = new DoublyLinkedList();

    list2.append('a');
    list2.append('b');
    list2.append('c');

    list2.remove('b');
    console.log(list2.size)
    result = list2.print();

    console.log(result);
  },

  main() {
    this.lesson1();
    //this.doublyLinkedList();
  }
}

export default linkedList