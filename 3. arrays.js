// 1. Write a JavaScript function to check if a certain word is a Palindrome.
// 2. Write a JavaScript function to get a random item from an array.
// 3. Write a JavaScript program which accept a string as input and swap the case of each character.
// 	For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// 4.Write a JavaScript function to compute the sum of an array of integers.

function sumOfNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}

// const numbers = [2, 6, 9 , 8];
//console.log(sumOfNumbers(numbers));

/* 5. Write a JavaScript function to remove a specific element from an array 
	var myNames = ["John","Cindy","Omer","Barbie","Barbie"];
	removeSpecificelement(myNames,"Barbie"); */

function removeSpecificelement(list, item) {
  let indexItem = list.indexOf(item);
  list.splice(indexItem, 1);
  return list;
}
//var myNames = ["John", "Cindy", "Omer", "Barbie", "Barbie"];
//console.log(removeSpecificelement(myNames, "Barbie"));

// 6. Write a function to remove all strings with less than X characters from an array of strings
// 7. Write a JavaScript function to generate an array with the first X Fibonacci numbers.

// 8. Write a JavaScript function that returns array elements larger than a number given:
var numbers = [5, 2, 20, 60, 45];
var toCheck = 6;
// returned array:[20,60,45]

function checkNumber(listNumbers, numberToCheck) {
  const largerNumbers = [];
  listNumbers.forEach(function (number) {
    if (number > numberToCheck) {
      largerNumbers.push(number);
    }
  });
  return largerNumbers;
}

// console.log(checkNumber(numbers, toCheck));

// 9. Write a Javascript function to generate a random color in format rgb(0,0,0);
// 10. Write a JavaScript program to find the types of a given angle.  Go to the editor
//   Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
// 11. Write a JavaScript function to merge two arrays and removes all duplicates elements.
// 12. given [2,1,6,4]
//     expected => [8,1,216,64] => the power 3
//     thirdPower([2,1,6,4])

// 13. given [2,1,6,4]
//     expected => [8,1,216,64] => the power N
//    nthPower([2,1,6,4],16)

// 14. given [2,1,6,4]
//     calc avg
//     calc sum    (reduce)

/* 15. given ["Ellen","bert","Bart","zaki","Sandra","Soroush"]
  remove all the names that do not start with a capital */

function removeNotCapital(names) {
  let indexName = 0;
  names.forEach(function (name) {
    if (name[0] !== name[0].toUpperCase()) {
      let indexName = names.indexOf(name);
      names.splice(indexName, 1);
    }
  });
  return names;
}

const names = ["Ellen", "bert", "Bart", "zaki", "Sandra", "Soroush"];
//console.log(removeNotCapital(names));

// 16. Write a Javascript function to find how many times a certain number occurs in that array.
// 17. Write a JavaScript program to find the most frequent item of an array.
