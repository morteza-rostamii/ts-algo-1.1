
const module1 = {

  lesson1() {
    let result = null;
    // bubble sort

    // reverse array

    // rotate array: left and right:
    /* 
    Array Rotation: Rotate the elements of an array left or right by a specified number of positions.


    */

    /* 
    # duplicate removal

    Duplicate Removal: Remove duplicates from an array while preserving the order of elements.


    */

    const duplicates = [1, 2, 4, 1, 2, 8, 8];

    // O(n) linear
    function removeDuplicate(arr: number[]) {
      const uniques: any = {};
      
      for (let i=0; i < arr.length; i++) {
        if (uniques[arr[i]]) {
          uniques[arr[i]].push(arr[i]);
        } 
        else {
          uniques[arr[i]] = [];
          uniques[arr[i]].push(arr[i]);
        }
      }

      return Object.keys(uniques).map((el: string) => Number(el));
    }

    // result = removeDuplicate(duplicates); [1, 2, 4, 8]

    console.log(result);
  },

  midLevelArrChallenges() {
    let result = null;

    function arrIntersection(arr1: number[], arr2: number[]) {
      const intersection: number[] = [];


      
      return intersection; 
    }

    const arr1: number[] = [1, 2, 3, 56, 30];
    const arr2: number[] = [30, 21, 20, 2, 4]

    result = arrIntersection(arr1, arr2);

    console.log(result);
  },

  roadsideCoder() {
    let result = null;

    /* 
    # palindrome number

    an integer is a palindrome when it reads the same forward and backward

    # input: x = 121
    # output: true

    # input: 10
    # output: false
    */

    function palindromeNumber(num: number): boolean {
      const isPalindrome = false;



      return isPalindrome; 
    }

    result = palindromeNumber(121);

    console.log(result);
  },

  lesson2() {
    let result = null;
    
    // big O notation:

    /* 
    
    O(1) - Constant Time: The algorithm executes in a constant time regardless of the input size. Example: accessing an element in an array by index.

    O(log n) - Logarithmic Time: The algorithm's time complexity grows logarithmically with the input size. Example: binary search in a sorted array.

    O(n) - Linear Time: The algorithm's time complexity grows linearly with the input size. Example: iterating through elements in an array.

    O(n log n) - Linearithmic Time: The algorithm's time complexity is a product of a linear factor and a logarithmic factor. Example: efficient sorting algorithms like Merge Sort and Quick Sort.

    O(n^2) - Quadratic Time: The algorithm's time complexity grows quadratically with the input size. Example: nested loops iterating through a 2D array.

    O(n^3) - Cubic Time: The algorithm's time complexity grows cubically with the input size. Example: triple nested loops iterating through a 3D array.

    O(2^n) - Exponential Time: The algorithm's time complexity grows exponentially with the input size. Example: solving the Tower of Hanoi problem using a recursive approach.

    O(n!) - Factorial Time: The algorithm's time complexity grows factorial with the input size. Example: generating all permutations of a sequence.
    
    */

    /* 
    #Big O Cheat Sheet:

    -Big Os
    
    O(1) Constant- no loops

    O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)

    O(n) Linear- for loops, while loops through n items

    O(n log(n)) Log Liniear- usually sorting operations

    O(n^2) Quadratic- every element in a collection needs to be compared to every other element. Two nested loops

    O(2^n) Exponential- recursive algorithms that solves a problem of size N
    
    O(n!) Factorial- you are adding a loop for every element

    Iterating through half a collection is still O(n)

    Two separate collections: O(a * b)

    -What can cause time in a function?-

    Operations (+, -, *, /)
    Comparisons (<, >, ==)
    Looping (for, while)
    Outside Function call (function())

    -Rule Book
    
    Rule 1: Always worst Case
    Rule 2: Remove Constants
    Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
    O(a*b)

    + for steps in order
    * for nested steps
    
    Rule 4: Drop Non-dominant terms

    -What causes Space complexity?-

    Variables
    Data Structures
    Function Call
    Allocations
    
    */

    /* 
    
    # rules of determaining big O:
    ==

    rule 1: worst case
      # always consider the worstcase , for example in linear search: if: target is at the last index of the array.

    rule 2: remove constants
      # add, sub, or multi and divide by a constant =: does not matter
      # so just drop the const.
      # example: O(2 * n) = O(n)

    rule 3: different terms for inputs
      # multiple inputs to function with different sizes

      function foo(n, m) {}

      # where: n = [1, 2] and m = [3, 4, 5, 6]

    rule 4: drop non dominants
      # if: we have O(n) and O(n^2) =: drop o(n)


    # ===============
    # 3 pillars of coding

    # readable

    # speed: time complexity

    # space: memory usage

    #=====================

    # space complexity:
    ==

      # heap
        # variables
      # stack
        # function calls
      
    
    */

    // O(n + m)
    function multipleInputs(n: number[], m: number[]) {
      for (let i=0; i < n.length; i++) {
        console.log(n[i]);
      }
      console.log('--')
      for (let i=0; i < m.length; i++) {
        console.log(m[i]);
      }
    }

    // multiple inputs with different sizes
    multipleInputs([1, 2], [1, 2, 3, 4, 5]);

    //================================================

    /* 
    # get all different combinations of 2 (pairs of 2) ?

    */

    const arr1 = [1, 2, 3, 4, 5];

    // 5^2 = 5 * 5 or O(n^2) =: Quadratic time
    function getPairs(arr1: number[]) {
      const pairs: any = [];

      for (let i=0; i < arr1.length; i++) {

        // i = arr[0]: j = arr[0], arr[1], arr[2], arr[3], arr[4]  
        for (let j=0; j < arr1.length; j++) {
          const pair = [arr1[i], arr1[j]];
          pairs.push(pair);
        }
      }

      return pairs;
    }

    result = getPairs(arr1);

    //================================================

    // O(n * m)
    // multiple input wtih different sizes =: n and m
    // nested loop: so it's multiplication (it's not quadratic)
    function loopIt(n: number[], m: number[]) {

      // for each: n loop , iterates m.length times 
      for (let i=0; i < n.length; i++) {

        // i = arr[0]: j = arr[0], arr[1], arr[2], arr[3], arr[4]  
        for (let j=0; j < m.length; j++) {
          console.log(m[j])
        }
      }
    }

    /* 
    # bubble_sort


    */

    const data: number[] = [23, 2, 5, 1, 0, 30];

    function bubbleSort(arr: number[]) {

      // -1 : to not go out of bound
      // -i : to not go over the one more of last elements.
      for (let i=0; i < arr.length - 1; i++) {
        let swapped = false;
        let hold = null;

        for (let j=0; j < arr.length - i - 1; j++) {
          //console.log(i, j);
          hold = arr[j];
          if (arr[j] > arr[j + 1]) {
            arr[j] = arr[j + 1];
            arr[j + 1] = hold;

            // swap happend
            swapped = true;
          }
        }
      } 

      return arr;
    }

    //result = bubbleSort(data);

    /* 
    # binary_search

    # give a sorted list:

    # have 3 pointers: low, mid, high

    # low = arr[0]
    # high = arr[arr.length - 1]
    # mid = (low + high) / 2

    # target = number to search for
    
    # if: target === mid 
      # return mid;
    # if: low >= high:
      # traget not found

    # if: target > mid =: get rid of the left_side =: 
      # means: set low to mid + 1 =: cause: it's not mid either
      # calc mid each time: mid = (low + high) / 2

    # if: target < mid:
      # high = mid - 1;
      # calc new mid
    
    */

    // O(log n)
    function binarySearch(arr: number[], target: number): number | null {
      
      let low = 0;
      let high = arr.length - 1;
      let mid = Math.floor((low + high) / 2);
      //let flag = true;

      while (true) {
        console.log(
         `low:${low} high:${high} mid:${mid}`
        )
        if (target === arr[mid]) return arr[mid];
        
        // not found traget and low is greater than high
        if (low >= high) return null;

        if (target > arr[mid]) low = mid + 1;

        if (target < arr[mid]) high = mid - 1;

        mid = Math.floor((low + high) / 2);
      }

      //return null;
    }

    // array has to be sorted
    //result = binarySearch(bubbleSort([23, 3, 4, 5, 8]), 3);

    console.log(result);
  },

  main() {
    //this.lesson1();
    //this.midLevelArrChallenges();
    //this.roadsideCoder();
    this.lesson2();
  },
}

export default module1