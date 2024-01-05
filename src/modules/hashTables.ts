
/* 
# hash tables:

# collisions: 
  # when the same hash might point to the same key!! (same momory address)
    # linked--list can solve this: (separate chaining)
    # key -> hash -> address -> node-a -> node-b

# insert: O(1)
# read: O(1)
# delete: O(1)
# search: O(1)
*/

const hashTables = {

  lesson1() {
    let result = null;

    // object: key:value
    class HashTable<T> {
      private readonly _size: number;
      // [string, T] = [key, value]
      private _table: Array<Array<[string, T]>>;

      constructor(size: number) {
        this._size = size;
        this._table = new Array<any>(size);
      }

      // hash function: creates a hash or each particular key
      public hash(key: string): number {
        let hashed: number = 0;

        for (let i=0; i < key.length; i++) {
          // get the asci of each char in the key
          hashed += key.charCodeAt(i);
        }

        /* 
        # asci = index =: keep the index whitin the range of array.
        When you divide a number (x) by another number (a), the remainder will always be less than or equal to the divisor (a)
        */
        return hashed % this._size;
      }

      public set(key: string, value: T): void {
        // get key hashed
        const index = this.hash(key);

        // if: index empty
        if (!this._table[index]) this._table[index] = [];

        // update: value if already exists
        /* 
        _table = [
          0: [
            [key, value],
            [key, value]
          ]
        ]
        */
        const bucket = this._table[index];
        for (let i=0; i < bucket.length; i++) {
          if (bucket[i][0] === key) {
            bucket[i][1] = value;
            return;
          }
        }

        if (this._table[index]) this._table[index].push([key, value]);
      }

      public get(key: string): T | undefined {
        const index: number = this.hash(key);
        // bucket is to solve collisions problem: some time for different keys =: get the same hash =: meaning the same memory address
        const bucket: Array<[string, T]> = this._table[index];

        if (!bucket) return undefined;

        // get the right key:value out of the bucket
        for (let i=0; i < bucket.length; i++) {
          if (bucket[i][0] === key) return bucket[i][1];
        }

        return undefined;
      }

      public keys(): string[] {
        const keys: string[] = [];

        for (let i=0; i < this._table.length; i++) {
          const bucket: Array<[string, T]> = this._table[i];

          if (bucket) {
            for (let j=0; j < bucket.length; j++) {
              keys.push(bucket[j][0]);
            }
          }
        }
        
        return keys;
      }
    }

    const hash1 = new HashTable(500);
  
    hash1.set('foo', {username: 'sara'});
    hash1.set('goo', {username: 'morteza'});
    hash1.set('loo', {username: 'alireza'});

    //result = hash1.get('loo');
    //result = hash1.keys();

    //===============================================

    /* 
    # challenge

    # given an array =: return the first recurring element 
    
    # input: [2, 5, 1, 2, 3, 5, 1, 2, 4]
    # output: 2

    input: [2, 1, 1, 2, 3, 5, 1, 2, 4]
    out: 1

    input: [2, 3, 4, 5]
    out: undefined

    */

    // O(n)
    function findFirstRecurringElement(arr: number[]): number | undefined {

      // add item to visited
      const addItemToVisited = (item: string, element: number) => {
        // get existing elements
        const temp: Array<number> | undefined = visited.get(item);

        if (!temp) return;

        visited.set(item, [...temp, element]);
      }

      let recurringElement: number;

      // space: O(n)
      const visited = new Map<string, Array<number>>();

      for (let i=0; i < arr.length; i++) {
        // item string_key
        const item = arr[i].toString();

        // if: item is in visited =: we found the first recurring element
        if (visited.has(item)) {
          //addItemToVisited(item, arr[i]);
          return arr[i];
        }

        // if: item does not exists =: add an empty []
        if (!visited.has(item)) visited.set(item, []);
        addItemToVisited(item, arr[i]);
      }

      return undefined;
    }

    //result = findFirstRecurringElement([2, 5, 1, 2, 3, 5, 1, 2, 4]);
    //result = findFirstRecurringElement([2, 1, 1, 2, 3, 5, 1, 2, 4]);
    //result = findFirstRecurringElement([2, 3, 4, 5]);

    console.log(result);
  },

  main() {
    this.lesson1();

  },
}

export default hashTables