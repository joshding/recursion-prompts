/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if( n === 1 || n===0) {
    return 1;
  }
  if(n < 0) {
    return null;
  }
  return n*factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if(array.length === 0) {
    return 0;
  }
  if(array.length === 1) {
    return array[0];
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if(Array.isArray(array[0]) ) {
    return arraySum(array[0]) + arraySum(array.slice(1));
  }
  if ( array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  return array[0] + arraySum(array.slice(1));



};

// 4. Check if a number is even.
var isEven = function(n) {
  if(n === 1) {
    return false;
  }
  if (n === 0) {
    return true;
  }
  if(n > 0) {
  return isEven(n-2);
  }
  if(n < 0) {
    return isEven(n+2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0) {
    return n;
  }
  if(n > 0) {
    return n-1+sumBelow(n-1);
  }
  if (n < 0) {
    return n+1+ sumBelow(n+1);
  }

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
if(x===y || Math.abs(x-y) ===1) {
  return [];
}
  var array = [];
  if (x < y) {
  if(x === y-2) {
    array.push(x+1);
    return array;
  }
  array.push(x+1);
  return array.concat(range(x+1,y));
 }
  if(y < x) {
    if(y === x-2) {
      array.push(x-1);
      return array;
    }
      array.push(x-1);
      return array.concat(range(x-1,y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0) {
    return 1;
  }
  if(exp < 0) {
    return exponent(base, exp+1)/base;
  }
  return base * exponent(base, exp-1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n === 1) {
    return true;
  }
  if(n < 1) {
    return false;
  }
  return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if(string.length === 1) {
    return string;
  }
  return string[string.length-1] + reverse(string.slice(0,string.length-1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if(string.length === 1 || string.length === 0) {
    return true;
  }
  if(string[length-1] === string[string.length-1].toUpperCase() || string[0] === string[0].toUpperCase()) {
    string= string.toLowerCase();
  }
  if(string[string.length-1] === ' ') {
    string = string.slice(0, string.length-1);
  }
  if (string[0] === ' ') {
    string= string.slice(1);
  }
  if(string[0] === string[string.length-1]) {
    return palindrome(string.slice(1,string.length-1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if(y === 0) {
    return NaN;
  }
  if(x === 0) {
    return 0;
  }
  if(y < 0) {
    y = -y;
  }
  if( x < 0 && y > 0) {
    if(x+y > 0) {
      return x;
    }
    return modulo(x+y, y);
  }

  if(x-y < 0) {
    return x;
  }
  return modulo(x-y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if(y === 1) {
    return x;
  }
  if(y === 0) {
    return 0;
  }
  if((x < 0 || x > 0) && y < 0) {
    x = -x;
    y = -y;
  }
  return x + multiply(x,y-1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if(x === 0 && y === 0) {
    return NaN;
  }
  if(x < 0) {
    x = -x;
  }
  if( y < 0) {
    y = -y;
  }
  var z = x-y;
  var count = 0;
  if(z < 0) {
    return count;
  }
  count++;
  return count + divide(z,y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if(x< 0 || y < 0) {
    return null;
  }
  if(x === 0 || y === 0) {
    return x||y;
  }
  if(x === y) {
    return x;
  }
  if(x > y) {
    return gcd(y, x%y);
  }
  return gcd(x, y%x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1.length === 0 ^ str2.length === 0) {
    return false;
  }
  if(str1.length === 0 && str2.length === 0) {
    return true;
  }

  if(str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }

  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var array = []
  if(str.length === 0) {
    return array;
  }
  array.push(str[0]);
  return array.concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var last = array.slice(-1);
  if(array.length === 1) {
    return last;
  }
  return last.concat(reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if(length === 0) {
    return [];
  }
  var array = [];
  array.push(value);
  return array.concat(buildList(value, length-1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if(n === 0) {
    return [];
  }
  var output = '';
  var array = [];
  if(n%15 === 0) {
    output = 'FizzBuzz';
  } else if(n%3 === 0) {
    output = 'Fizz';
  } else if (n%5 === 0) {
    output = 'Buzz';
  } else {
    output = '' + n;
  }
  array.push(output);
  return fizzBuzz(n-1).concat(output);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  if(array[0] === value) {
    count++;
  }
  if(array.length <=1) {
    return count;
  }
    return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var arr = [callback(array[0])];
  if(array.length <= 1) {
    return arr;
  }
  return arr.concat(rMap(array.slice(1), callback));

};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for(var letter in obj) {
    if(typeof obj[letter] === 'object') {
      count += countKeysInObj(obj[letter], key);
    }
    if(letter === key) {
      count ++;
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for(var key in obj) {
    if(typeof obj[key] === 'object') {
      count += countValuesInObj(obj[key], value);
    } else if(obj[key] === value) {
      count ++;
    }
  }
  return count;

};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for(var key in obj) {
    if(key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    if(typeof obj[key] === 'object') {
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if(n <= 0) {
    return null;
  }
  if(n-1<= 0) {
    return[0,1];
  }
  var array = fibonacci(n-1);
  array.push(array[array.length-2] + array[array.length-1]);

  return array;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0) {
    return null;
  }
  if(n === 0 || n === 1) {
    return n;
  }
  return nthFibo(n-1) + nthFibo(n-2);

};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if(array.length === 0) {
    return array;
  }
  array[0] = array[0].toUpperCase();
  if(array.length === 1) {
    return array;
  }
  return array.slice(0, 1).concat(capitalizeWords(array.slice(1)));

};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if(array.length === 0) {
    return array;
  }
  array[0] = array[0][0].toUpperCase() + array[0].slice(1);
  if(array.length === 1) {
    return array;
  }
  return array.slice(0,1).concat(capitalizeFirst(array.slice(1)));

};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for(var key in obj) {
    if(typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (obj[key] %2 === 0) {
     sum += obj[key];
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var temp = [];
  for(var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      temp = temp.concat(flatten(array[i]));
    } else {
      temp.push(array[i]);
    }
  }
  return temp;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if(obj === undefined) {
    obj = {};
  }

  if(obj[str[0]] === undefined) {
      obj[str[0]] = 1;
  }
  else {
    obj[str[0]]++;
  }
  if(str.length === 1) {
    return obj;
  }
  letterTally(str.slice(1),obj);

  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if(list.length === 1) {
    return list;
  }
  var array = [];
  for(var i = 1; i < list.length-1; i++) {
    if(list[i] !== list[0] ) {
      array.push(list[0]);
      break;
    }
  }
  return array.concat(compress(list.slice(i)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if(array.length === 1) {
    array[0].push(aug);
    return array;
  }
  var arr = [];
  array[0].push(aug);
  arr.push(array[0]);
  return arr.concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var arr = [];
  var zero = false;
  for(var i = 0; i < array.length; i++) {
    if(zero && array[i] !== 0) {
      arr.push(0);
      break;
    }
    if(array[i]!== 0) {
      arr.push(array[i]);
    } else {
      zero = true;
    }
  }
  return i === array.length? arr : arr.concat(minimizeZeroes(array.slice(i)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if(array.length === 0) {
    return array;
  }
  array[0] = Math.abs(array[0]);
  if(array.length === 1) {
    return array;
  }
  array[1] = - Math.abs(array[1]);
  return array.slice(0,2).concat(alternateSign(array.slice(2)));

};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var obj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8:'eight', 9:'nine'}
  var array = str.split(' ');
  if(obj[array[0]] !== undefined) {
    array[0] = obj[array[0]]
  }
  if(array.length === 1) {
    return array.join('');
  }
  return array[0] + ' ' + numToText(array.slice(1).join(' '));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node= document.documentElement) {
  var count = 0;
  if(node.tagName) {
    if(node.tagName.toLowerCase() === tag) {
      count++;
    }
    return node.children ? count + tagCount(tag, node.children) : count;
  }
  if(node.length) {
    for(var i = 0; i < node.length; i++ ) {
        if(node[i].tagName.toLowerCase() === tag) {
          count ++;
        }
        if(node[i].children) {
          count += tagCount(tag, node[i].children);
        }
    }
  }
  return count;


};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min = 0, max= array.length-1) {
  var num = ((min+max)/2)|0;
  if(array[num] === target) {
    return num;
  }
  if(min === max-1) {
    if(array[min] === target) {
      return min;
    }
    if(array[max] === target) {
      return max;
    }
    return null;
  }
  if(array[num] < target) {
    return binarySearch(array,target, num, max);
  }
  if(array[num] > target) {
    return binarySearch(array, target, min, num);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if(array.length === 1 || array.length === 0) {
    return array;
  }
  var split = (array.length/2)|0;
  return merge(mergeSort(array.slice(0,split)), mergeSort(array.slice(split)));
};
var merge = function(left, right) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if(Array.isArray(input)) {
    var obj = [];
    for(var i = 0; i < input.length; i++) {
      if(typeof input[i] === 'object') {
        obj.push(clone(input[i]));
      } else {
        obj.push(input[i]);
      }
    }
  } else {
  var obj= {};
  for(var key in input) {
    if(typeof input[key] === 'object') {
      obj[key] = clone(input[key]);
    } else {
      obj[key] = input[key];
    }
  }
}
  return obj;
};
