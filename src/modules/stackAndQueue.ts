
/* 

# stack: last-in =: first-out

# queue: first-in =: first-out =: like a line of people

*/

const stackAndQueue = {

  lesson1() {

    // implement stack using: (linked--list)

    class Node<T> {
      data: T;
      next: Node<T> | null;

      constructor(data: T) {
        this.data = data;
        this.next = null;
      }
    }

    class Stack<T> {
      // last--in element
      top: Node<T> | null;
      // first--in element
      bottom: Node<T> | null;
      size: number;

      constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
      }

      // push an element on top of the stack
      public push(data: T): void {
        const newNode: Node<T> = new Node(data);

        // if: bottom = empty =:  stack is empty
        if (!this.bottom) {
          this.bottom = newNode;
          this.top = newNode;
          this.size++;
          return;
        }

        // (this.bottom = a) = (this.top = a)
        // (this.top = a).next = newNode
        // (this.top = newNode)
        if (this.top) {
          // when one element: this.bottom = this.top =: so: setting their.next
          // also: last_node.next = newNode
          this.top.next = newNode;
          // top = newNode
          this.top = newNode;
        }

        this.size++;
      }

      // pop element from top of the stack
      public pop(): Node<T> | null {
        let removedNode: Node<T> | null = null;
        // loop to the second--to--last--node
        let current: Node<T> | null = this.bottom;
        
        if (this.isEmpty()) return null;

        // pop the element on top
        removedNode = this.top;

        /* 
        // this.top
        // prev.next = this.top
        
        this.top = prev;
        prev.next = null;
        */
        
        // one element
        if (this.top === this.bottom) {
          this.top = null;
          this.bottom = null;
        }
        else {
          
          // current will be null for the last-node
          while (true) {
            // ts--check
            if (!current) break;
            // break before the last node
            if (current.next === this.top) break;
            current = current.next;
          }
        }
        
        //console.log(current)
        // current = second-to-last
        if (current) {
          //removedNode = current.next;
          // remove link to the last node
          current.next = null;
          // set: this.top = second-to-last
          this.top = current;
        }

        this.size--;
        return removedNode;
      }

      // return element at top of the stack
      public peek(): T | null {
        
        if (this.isEmpty()) return null;

        return this.top ? this.top.data : null;
      }

      public isEmpty(): boolean {
        return this.size === 0;
      }
    }
    
    const stack1 = new Stack();

    stack1.push('a');
    stack1.push('b');
    stack1.push('c');
    //stack1.push('d');

    console.log(stack1.pop());
    console.log(stack1.pop());

    console.log(stack1.size);
    console.log(stack1.peek()); // d
    console.log(stack1);
  },

  lessonQueue() {

    class Node<T> {
      data: T;
      next: Node<T> | null;

      constructor(data: T) {
        this.data = data;
        this.next = null;
      }
    }
    
    // first-in =: first-out

    /* 
    shift [1, 2, 3, 4, 5].push
    */
    class Queue<T> {
      first: Node<T> | null;
      last: Node<T> | null;
      size: number;

      constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
      }

      // add elements to the end
      public enqueue(data: T): void {
        const newNode: Node<T> | null = new Node(data);

        // if: empty
        if (!this.first) {
          this.first = newNode;
          this.last = newNode;
          this.size++;
          return;
        }

        // ts--check
        if (this.last) {
          // old--last.next = newNode; 
          this.last.next = newNode;
          this.last = newNode;  
        }
        this.size++;
      }

      // O(1)
      public dequeue(): T | null {
        const firstNode: Node<T> | null = this.first;

        if (this.isEmpty()) return null;

        // one element
        if (this.first === this.last) {
          this.first = null;
          this.last = null;
          this.size--;
          return firstNode ? firstNode.data : null;
        }

        // first = first.next
        if (this.first) {
          this.first = this.first?.next;
        }

        this.size--;
        return firstNode ? firstNode.data : null;
      } 

      // return element in front (first) of the queue
      public peek(): Node<T> | null {

        if (!this.first) return null;

        return this.first;
      }

      public print(): Array<T> | [] {
        const values: T[] = []
        let current: Node<T> | null = this.first;

        while (true) {

          if (current === null) break;

          values.push(current.data);
          current = current.next;
        }

        return values;
      }

      public isEmpty(): boolean {
        return this.size === 0;
      }
    }

    const queue1 = new Queue();

    queue1.enqueue('a');
    queue1.enqueue('b');
    queue1.enqueue('c');
    queue1.enqueue('d');

    const res = queue1.dequeue();
    const res2 = queue1.dequeue();
    const res3 = queue1.dequeue();
    const res4 = queue1.dequeue();

    console.log(
      res, 
      res2, 
      res3, 
      res4
      );

    console.log(queue1.peek());
    console.log(queue1);
    console.log(queue1.first);
    console.log(queue1.print());
  },

  lesson2() {

    /* 
    
    # implement queue using stack -> and stack is build on array
    
    # push, pop, peek, isEmpty

    # stack: last-in =: first-out
    # quque: first-in => first-out

    ===============================================

    # leetcode: 

    constraints:
    ==

    # Two Stacks Only: You are only allowed to use two stacks to create the queue.

    # Supported Queue Functions: The queue implementation should support standard queue functions: push, pop, peek, and empty.

    # Stack Operations Only: While implementing the queue, you can use only standard stack operations such as push (to top), peek/pop (from top), size, and is empty. No other operations specific to queues can be used in the implementation.

    # Constraint on Range: The values to be pushed into the queue will be integers ranging from 1 to 9, inclusive.

    # Limited Number of Calls: There will be at most 100 calls made to push, pop, peek, and empty.

      during the execution of the program using the implemented queue, the combined count of all method calls (push, pop, peek, and empty) will be at most 100 times.

    # Validity of Calls: All calls made to pop and peek will be valid.

      This implies that you don't need to handle situations where these operations are called on an empty queue
    */

    class Stack {
      data: number[];
      size: number;
      
      constructor() {
        this.data = [];
        this.size = 0; 
      }

      // push from the top
      public push(data: number): void {
        this.data.push(data);
        this.size++;
      }

      // pop from the top
      public pop(): number | null {
        if (this.isEmpty()) return null;

        const popedEl = this.data.pop();
        if (!popedEl) return null;

        this.size--;
        return popedEl;
      }

      public isEmpty(): boolean {
        return this.size === 0;
      }
    }

    // test stack
    /* const stack1 = new Stack();

    stack1.push('a');
    stack1.push('b');
    //stack1.push('c');

    console.log(stack1.pop());

    console.log(stack1.data); */

    class Queue {
      // for push: [1, 2, 3]
      inbox: Stack;
      // for pop: [3, 2, 1]
      outbox: Stack;
      size: number;
      maxCall: number;

      constructor() {
        this.inbox = new Stack();
        this.outbox = new Stack();
        this.size = 0;
        this.maxCall = 0;
      }

      private reachedMaxCall(): boolean {
        return this.maxCall > 100;
      }

      public push(data: number): void {
        // input constraints:

        // check maxCal
        if (this.reachedMaxCall()) return;

        // data between: 1 to 9 -: include 1 and 9
        if (data < 1 || data > 9) return; 

        // push from the back of queue
        this.inbox.push(data);

        // first push and outbox empty
        if (this.outbox.isEmpty()) {
          const el = this.inbox.pop();
          if (el) this.outbox.push(el);
        }
        
        this.maxCall++;
        this.size++;
      }

      // pop from the front of the stack
      public pop(): number | null {
        // check maxCal
        if (this.reachedMaxCall()) return null;

        if (this.empty()) return null;

        // first--pop() : outbox has the first pushed element.
        const popedElement: number | null = this.outbox.pop();

        // if: outbox is empty? get more from inbox;
        if (this.outbox.isEmpty()) {
          // empty the inbox into outbox.
          while (!this.inbox.isEmpty()) {
            const el = this.inbox.pop()
            if (!el) break;
            this.outbox.push(el);
          }
        }

        this.size--;
        this.maxCall++;
        return popedElement;
      }

      // return element in front of the queue
      public peek(): number | null {
        // check maxCal
        if (this.reachedMaxCall()) return null;
        if (this.empty()) return null;

        this.maxCall++;
        return this.outbox.data[this.outbox.size - 1];
      }

      public empty(): boolean | undefined {
        // check maxCal
        if (this.reachedMaxCall()) return;

        this.maxCall++;
        return this.size === 0;
      }
    }

    // test queue

    const queue1 = new Queue();

    queue1.push(1);
    // can't push 0
    queue1.push(0);
    //queue1.push(3);
    //queue1.push(4);

    /* console.log('popedEL: ', queue1.pop());
    console.log('popedEL: ', queue1.pop());
    console.log('popedEL: ', queue1.pop());
    console.log('popedEL: ', queue1.pop()); */


    console.log('first in line', queue1.peek());
    //console.log(queue1.pop());

    console.log(queue1);
  },

  main() {
    //this.lesson1();
    //this.lessonQueue();
    this.lesson2();
  }
}

export default stackAndQueue