// <-----------reverseArray()----------->

/* 1.
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on! */

// Write your code here:

const reverseArray = (arr) => {
  const newArray = [];
  for ( let i = arr.length -1 ; i >=0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));

// Should print ['This', 'will', 'all', 'make', 'sense.'];










// <-----------greetAliens()----------->

/* 1.
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!” */

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 
 
/* Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on! */

// Write your code here:

const greetAliens = (arr) => {
  for ( let i = arr.length -1 ; i >=0; i--) {
    const alien = arr[i];
    const surrender = 'Oh powerful ' + alien + ', we humans offer our unconditional surrender!'
    console.log(surrender);
  }
}

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);










// <-----------convertToBaby()----------->

/* 1.
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '. */

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

convertToBaby(animals); 

// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

/* Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on! */

const convertToBaby = arr => {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
        babyArray.push('baby ' + arr[i]);
  }
  return babyArray
}

/*
// As a function declaration:
function convertToBaby(arr) {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
        babyArray.push('baby ' + arr[i]);
  }
  return babyArray
}
*/ 

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));










// <-----------Fix the broken code!----------->

/* 1.
We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array results. We loop through the argument array and push in the smallest power of two which is greater than the current element.

It’s not doing what we want. Can you fix our code, please? */

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
                    console.log(i);
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers));

// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]