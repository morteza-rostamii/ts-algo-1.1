
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

    
    */

    class Stack<T> {
      data: T[];
      size: number;
      
      constructor() {
        this.data = [];
        this.size = 0; 
      }

      // push from the top
      public push(data: T): void {
        this.data.push(data);
        this.size++;
      }

      // pop from the top
      public pop(): T | null {
        if (this.isEmpty()) return null;

        const popedEl = this.data.pop();
        console.log('--%', this.data)
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

    class Queue<T> {
      // for push: [1, 2, 3]
      stackIn: Stack<T>;
      // for pop: [3, 2, 1]
      stackOut: Stack<T>;
      size: number;

      constructor() {
        this.stackIn = new Stack();
        this.stackOut = new Stack();
        this.size = 0;
      }

      public push(data: T): void {

        this.stackIn.push(data);

        for (let i=0; i < this.stackIn.size; i++) {
          //console.log(this.stackIn.data[i]);

          // if: pop element from top of stackIn and push into stackOut -: we reverse
          const element = this.stackIn.pop();

          if (!element) break;
          console.log('--', element)
          // [1,2 ] =: [2, 1]
          this.stackOut.push(element);
        }
        // console.log('--');

        this.size++;
      }

      // pop from the front of the stack
      public pop(): T | null {
        if (this.empty()) return null;


      }

      public peek(): T | null {
        if (this.empty()) return null;

      }

      public empty(): boolean {
        return this.size === 0;
      }
    }

    // test queue

    const queue1 = new Queue();

    queue1.push('a');
    queue1.push('b');
    queue1.push('c');
    queue1.push('d');

    console.log(queue1);
  },

  main() {
    //this.lesson1();
    //this.lessonQueue();
    this.lesson2();
  }
}

export default stackAndQueue