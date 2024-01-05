/* 
# insertion
# deletation
# traversal
# searching
# sorting

*/
const module3 = {

  arrayLesson() {
    let result = null;

    function jsObject() {

      // reference type
      // object =: holds a reference
      const obj1 = {name: 'ali'};

      // reference to the same object
      const obj2 = obj1;
      console.log(obj2);

      // context
      // this 

      type User = {name: string, getName: () => void}
      const user: User = {
        name: 'ali reza',
        
        // in arrow_function , this : does not have the right context.
        getName() {
          return this.name;
        }
      }

      console.log(user.getName());

      // instantiation


      return null;
    }

    result = jsObject();

    console.log(result);
  },

  buildAnArray() {

    // build a custom array
    class CustomArray {
      private length: number;
      private _data: any;

      constructor() {
        this.length = 0;
        this._data = {};
      }

      public push(item: any): void {
        this._data[this.length] = item;
        this.length++;
      }

      // remove item from the end and return the item
      public pop(): any {
        const removed = this._data[this.length - 1];
        delete this._data[this.length - 1];
        // decrement data.length
        this.length--;
        return removed;
      }

      public shift(): any {
        const removed = this._data[0];
        delete this._data[0];

        // loop through object and decrement each key:
        for (const key in this._data) {
          const currentVal = this._data[key];
          delete this._data[key];
          this._data[Number(key) - 1] = currentVal;
        }

        this.length--;
        return removed;
      }

      // add element to the front of the array
      public unshift(item: any): any {

        // shift all elements one forward, increment from the last item.
        const keys = Object.keys(this._data);
        keys.reverse().forEach((key: string) => {
          const currentVal = this._data[key];
          delete this._data[key];
          this._data[Number(key) + 1] = currentVal;
        });

        this.length++;
        // put new item at index[0]
        this._data[0] = item;
      }

      public get(index: number) {
        return this.data[index];
      }

      public get data() {
        return this._data;
      }

      /* private get data() {
        return this._data;
      } */
    }

    const newArr = new CustomArray();
    newArr.push('a');
    newArr.push('b');
    newArr.push('c');
    newArr.push('d');
    newArr.push('e');

    // remove the last element and return 
    console.log(newArr.pop());
    // remove the first element and return
    console.log(newArr.shift());
    newArr.unshift('love');
    //console.log(newArr.get(0));
    newArr.push('park'); 
    console.log(newArr.data);
  },

  arrChallenges() {
    let result = null;
    /* 
    # create a function that reverses a string
    
    # input: pat
    # output: tap
    */

    // O(n)
    function reverseStr(str: string): string | null {
      let reversed = '';
      
      // input validation
      if (!str) return null;
      if (typeof str !== 'string') return null;
      if (str.length < 2) return str;

      // loop and append to the front of a string
      for (let i=0; i < str.length; i++) {
        reversed = str[i] + reversed;
      }

      return reversed;
    }

    // result = reverseStr('pat');

    // method 2: converting to array

    function reverseStr2(str: string): string {
      const arr = str.split('');
      const reversedArr = arr.reverse();
      return reversedArr.join('');
    }

    //result = reverseStr2('love');

    //==============================================

    /* 
    # given 2 sorted array => merge them into one sorted array?!

      # if: just merge them -: not going to be sorted.
        # so: have to sort them again.
    
      # how to merge 2 sorted array , without making them unsorted?!
        # use pointers

    */

    // O(n + m)
    // we loop at least one time over biggest_array.length, and we have 2 arrays input
    function mergeSortedArrs(n: number[], m: number[]): number[] {
      const merged: number[] = [];

      if (!n.length) return m;
      if (!m.length) return n;
      if (!n.length && !m.length) return [];

      let np = 0;
      let mp = 0;

      while (true) {
        // first array pointer === first arr.length
        if (np >= n.length) {
          
          //if (mp < m.length - 1) {
            // if: one of arrays don't reach the end
            // becuase: 2 arrays might not be of the same length =: take care of remaining elements
          merged.push(...m.slice(mp));
          //}
          break;
        }

        // if: m reaches the end
        if (mp >= m.length) {

          // then: n is the bigger one
          // if: np < lastIndex then: there are remainders
          //if (np < n.length - 1) {
          merged.push(...n.slice(np));
          //}
          break;
        }

        if (n[np] < m[mp]) {
          merged.push(n[np]);
          // move up: array_n pointer
          np++;
        } 
        else if (n[np] > m[mp]) {
          merged.push(m[mp]);
          // move up: array_m pointer
          mp++;
        }
        else {
          // n[0] === m[0]
          // push both into the merged array
          merged.push(...[n[np], m[mp]]); 
          // move both pointers up
          np++;
          mp++;
        }
      }

      return merged;
    }

    //result = mergeSortedArrs([0, 3, 4, 31], [4, 6, 30]);

    

    console.log(result);
  },

  main() {
    //this.arrayLesson();
    //this.buildAnArray();
    this.arrChallenges();
  },
}

export default module3