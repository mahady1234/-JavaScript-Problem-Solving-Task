// // ###1
function reverseString(str){
         return str.split('').reverse().join('')
}

console.log(reverseString('mahadyhasan rumi'))

// // ###2

function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count,vowels;
}

console.log(countVowels("programmiing"));


// // ###3


function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  if(str === reversed){
    return true;
  }
  return false ;
}


console.log(isPalindrome("mom")); 
console.log(isPalindrome("dad")); 
console.log(isPalindrome("munmun")); 


// // ###4

function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}


console.log(findMax([500, 1,255, 91,4, 3])); 


// // 5

function removeDuplicates(arr) {
  let unique = [];

  for (let i =0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}


console.log(removeDuplicates([1, 2, 2, 3, 4,44,4,4, 4]));


// // 6


function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum =sum+ arr[i];
  }
  return sum;
}


console.log(sumArray([1, 2, 3, 4,10])); 


// // 7


function findEvenNumbers(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));


// // 8

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word =
      words[i][0].toUpperCase() + words[i].slice(1);
    result.push(word);
  }

  return result.join(" ");
}


console.log(capitalizeWords("hello world this is mahady hasan rumi"));


// // 9


function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result =result*i;
  }
  return result;
}


console.log(factorial(10)); 


// // 10

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();



