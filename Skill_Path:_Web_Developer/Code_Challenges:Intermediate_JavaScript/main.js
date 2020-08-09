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









// <-----------declineEverything() and acceptEverything()----------->

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const grudginglyAccept = (veg) => {
  console.log('OK, I guess I will eat some ' + veg + '.');
}

/* 1.
Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array! */

// Write your code here:

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
}

console.log(declineEverything(veggies));

/* 2.
Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array! */

// Write your code here:

const acceptEverything = (arr) => {
  console.log(arr.forEach(grudginglyAccept));
}

acceptEverything(veggies);









// <-----------declineEverything() and acceptEverything()----------->

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare) 


// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}

console.log(squareNums(numbers));











// <-------------------shoutGreetings()------------------>

/* 1.
Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array! */

// Write your code here:

// Test tpUpperCase() method

const test = 'test';

const shoutGreeting = (arr) => {
  console.log(arr.toUpperCase()); 
}

// console.log(shoutGreeting(test));

// <------------------------------->

// Test capitalisation and exclamation

const tester = ['test', 'example', 'attempt'];

const capitalize = arr => arr.map(item => item.toUpperCase());

const exclamation = arr => arr.map(item => item + '!');

// console.log(capitalize(tester));

// console.log(exclamation(tester));

// <------------------------------->

// Incorporate above methods to function

const shoutGreetings = (arr) => {
  const capitals = capitalize(arr);
  const mark = exclamation(capitals);
  return mark;
}

// WOOHOO!

// <------------------------------->

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
















// <-------------------sortYears()------------------>

/* 1.
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years! */

// Write your code here:

const checkYears = (year1, year2) => year1 < year2

const sortYears = (years) => {
  return years.sort(checkYears);
}





// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]










// <-------------------sortYears()------------------>

/* 1.
Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

justCoolStuff(arr1, arr2); // Should return ['this']
You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own! */

// Write your code here:

const justCoolStuff = (myStuff, coolStuff) => {
  return myStuff.filter((word) => coolStuff.includes(word));
}


// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]











// <-------------------isTheDinnerVegan()------------------>

/* 1.
Write a function isTheDinnerVegan() that takes in an array of food objects in the format: */

{name: 'cabbage', source: 'plant' }

/*
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins. */

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

isTheDinnerVegan(meal); // Should return true

/*
You can test your function when you’re ready by passing in the dinner array or by making your own! */

// Write your code here:



const isTheDinnerVegan = (dinner) => {
  return dinner.every(isVegan);
}


// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

// console.log(dinner);

function isVegan(dinner) {
  if (dinner.source === 'plant') {
    return true;
  }
  return false;
}

console.log(isVegan(dinner));









// <-------------------sortSpeciesByTeeth()------------------>

/* 1.
Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

You can test your function when you’re ready by passing in the speciesArray array or by making your own! */

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:

const compareTeeth = (speciesObj1, speciesObj2) => 
speciesObj1.numTeeth > speciesObj2.numTeeth;


const sortSpeciesByTeeth = (speciesArray) => {
  const arrange = speciesArray.sort(compareTeeth);
  return arrange;
}

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

// Should print [ { speciesName: 'human', numTeeth: 32 },
  // { speciesName: 'dog', numTeeth: 42 },
  // { speciesName: 'shark', numTeeth: 50 },
  // { speciesName: 'alligator', numTeeth: 80 } ]










// <-------------------findMyKeys()------------------>

/* 1.
Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1. */

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);

// Should return -1

/*
You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

You can test your function when you’re ready by passing in the randomStuff array or by making your own array! */

// Write your code here:

const keys = (element) => element === 'keys';

const findMyKeys = (stuff) => {
  return stuff.findIndex(keys);
}

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

// Should print 4











// <----------------------dogFactory()----------------------->

/* 1.
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in */

dogFactory('Joe', 'Pug', 27)

// Should return { name: 'Joe', breed: 'Pug', 

/* 2.
Add getters and setters for each of the three properties and change the property names to have an underscore prepended. */

/* 3.
Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1. */

// Write your code here:

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        console.log('You must assign a name')
      }
    },
    set breed(newBreed) {
      if (typeof newBreed === 'string') {
        this._breed = newBreed;
      } else {
        console.log('You must assign a breed')
      }
    },
    set weight(newWeight) {
      if (typeof newWeight === 'number') {
        this._weight = newWeight;
      } else {
        console.log('You must assign a weight')
      }
    },
    bark() {
      return 'ruff! ruff!';
    },
    eatTooManyTreats() {
      return this._weight++;
    }
  }
}

const dog = dogFactory('Joe', 'Pug', 27);
console.log(dog);
console.log(dog.name);
console.log(dog.breed);
console.log(dog.weight);
console.log(dog.bark());
console.log(dog.eatTooManyTreats());






