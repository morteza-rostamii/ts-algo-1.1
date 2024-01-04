
/* 

# 

*/
const module2 = {

  lesson1() {
    let result = null;

    /* 
  
    # given an array of int , find a pair of numbers that add up to: x

    # input: [1, 2, 3, 9]
    # a + b = 8
    
    # output: 
      # [a, b]
      # null
    */

    // O(n^2)
    function findSumOfPairs(nums: number[], sum: number): Array<number> | null {
      //let result = null;

      for (let i=0; i < nums.length; i++) {
        // j=i =: don't loop the previous index again.
        for (let j=i; j < nums.length; j++) {
          const res = nums[i] + nums[j];

          if (res === sum) return [nums[i], nums[j]];
         }
      }

      return null;
    }

    //result = findSumOfPairs([1, 2, 3, 9], 8);
    //result = findSumOfPairs([1, 2, 4, 4], 8); // [4, 4]

    // beter time 
    // O(n)

    function findComplement(arr: number[], sum: number) {

      // access of set key=value is o(1)
      const numSet = new Set<number>();

      for (let i=0; i < arr.length; i++) {
        // 8 = ? + ? =: 8 - 4 = 4
        const complement = sum - arr[i];

        // check for complement inside of the set
        if (numSet.has(complement)) return [complement, arr[i]];

        // not found: push number into the set
        numSet.add(arr[i]);
      }

      // not exist
      return null;
    }

    //result = findComplement([1, 2, 3, 9], 8);
    //result = findComplement([1, 2, 4, 4], 8); // [4, 4]

    /* 
    # another solution:

    # [1, 2, 4, 4]
    # ((if the array is sorted)) =: sum of the last 2 numbers is: the biggest sum.
    # so: we can set a low_pointer and high_pointer and 
      # if: sum > low_pointer + high_pointer = move the low pointer up
      # else: sum < low_pointer + high_pointer = move the high down
      # else: sum === low_pointer + high_pointer = return ;
    */

    // O(n)
    // a two-pointer approach
    function findSumOfPairs2(arr: number[], sum: number) {

      // they hold index numbers
      let low = 0;
      let high = arr.length - 1;

      while (true) {
        //console.log('=')
        const res = arr[low] + arr[high];

        if (sum === res) return [arr[low], arr[high]];

        if (low >= high) return null;

        if (sum < res) high--;

        if (sum > res) low++;
      }

      return null;
    }

    //result = findSumOfPairs2([1, 2, 3, 9], 8);
    //result = findSumOfPairs2([1, 2, 4, 4], 8); // [4, 4]

    // ==========================================

    /* 
    # given 2 arrays , create a function that let's a user know (true/false) whether these two arrays
    contain any commom items:

    # const arr1 = ['a', 'b', 'c', 'x'] 
    # const arr2 = [z, y, i]

    # output: return false;


    arr1 = [a, b, c, x]
    arr = [z, y, x]

    # output = true
    */

    // O(n + m)
    function findArraysOverlap(a1: string[], a2: string[]): boolean {
      const overlaps = [];

      // o(n)
      const mapElements = (arr: string[]) => {
        // space complexity: O(n) =: size=4 =: push 4 items into Map
        const map = new Map<string, string[]>();

        for (let i=0; i < arr.length; i++) {
          if (map.has(arr[i])) {
            map.get(arr[i])?.push(arr[i]);
          } 
          else {
            map.set(arr[i], []);
            map.get(arr[i])?.push(arr[i]);
          }
        }

        return map;
      }

      // push a1 array elements into a Map
      const a1Map = mapElements(a1);

      // O(m)
      // loop the second array and find elements inside the Map
      for (let i=0; i < a2.length; i++) {
        const element: string[] | undefined = a1Map.get(a2[i]);
        if (element) overlaps.push(...element);
      }

      return overlaps.length ? true : false;
    }

    result = findArraysOverlap(
      ['a', 'b', 'c', 'x'],
      ['z', 'b', 'xs'],
    );
    /* result = findArraysOverlap(
      ['a', 'b', 'c', 'x'],
      ['z', 'y', 'i'],
    ); */

    /* 
    # if: looping over the same array 2 times.
    # O(n + n) or O(2*n) =: constant drops!! 
    
    function (arr) {
      for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
      }
      for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
      }
    }
    */

    console.log(result);
  },

  

  main() {
    
    this.lesson1();
  },
}

export default module2