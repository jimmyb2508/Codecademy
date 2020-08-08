/* <--------------CanIVote()------------> */

/* 1.
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not. */

// Write your function here:

const canIVote = (x) => {
  if (x >= 18) {
    return true
  } else {
    return false
  }
}



// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)) // Should print true

// We encourage you to add more function calls of your own to test your code!

console.log(canIVote(13))

console.log(canIVote(10))

console.log(canIVote(20))







/* <----------agreeOrDisagree()--------> */

/* 2. 
Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different. */

// Write your function here:

const agreeOrDisagree = (x, y) => {
  if ( x === y ) {
    return 'You agree!';
  } else {
    return 'You disagree!'
  }
}


// Uncomment the line below when you're ready to try out your function

console.log(agreeOrDisagree("yep", "yep")) 

// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!







/* <-------------lifePhase()------------> */

/* 3. Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'. */

// Write your function here:

const lifePhase = (x) => {
  if ( x < 0 || x > 140) {
    return 'This is not a valid age';
  } else if ( x >= 0 && x <= 3 ) {
    return 'baby';
  } else if ( x >= 4 && x <= 12 ) {
    return 'child';
  } else if ( x >= 13 && x <= 19 ) {
    return 'teen';
  } else if ( x >= 20 && x <= 64 ) {
    return 'adult';
  } else if ( x >= 65 && x <= 140 ) {
    return 'senior citizen';
  }
}


// Uncomment the line below when you're ready to try out your function
// console.log(lifePhase(5)) //should print 'child'

console.log(lifePhase(-1));
console.log(lifePhase(141));
console.log(lifePhase(3));
console.log(lifePhase(6));
console.log(lifePhase(15));
console.log(lifePhase(50));
console.log(lifePhase(68));

// We encourage you to add more function calls of your own to test your code!








/* <----------finalGrade()-------------> */

/* 1.
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: ‘F’
60-69 should return: ‘D’
70-79 should return: ‘C’
80-89 should return: ‘B’
90-100 should return: ‘A’ */

// Write your function here:

const finalGrade = (x, y, z) => {
  const average = ((x + y + z) / 3);
  if (( x < 0 || x > 100 ) || ( y < 0 || y > 100 ) || ( z < 0 || z > 100 )) {
    return 'You have entered an invalid grade';
  } else if ( average >= 0 && average <= 59 ) {
    return 'F';
  } else if ( average >= 60 && average <= 69 ) {
    return 'D';
  } else if ( average >= 70 && average <= 79 ) {
    return 'C';
  } else if ( average >= 80 && average <= 89 ) {
    return 'B';
  } else if ( average >= 90 && average <= 100 ) {
    return 'A';
  }
}

// Uncomment the line below when you're ready to try out your function

console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!

console.log(280/3);

console.log((30+100+100)/3);

console.log(finalGrade(13, 5, 12));

console.log(finalGrade(50, 40, 100));

console.log(finalGrade(30, 100, 100));

console.log(finalGrade(50, 100, 100));

console.log(finalGrade(80, 100, 100));

console.log(finalGrade(-5, -20, -50));

console.log(finalGrade(1000, 100, 100));

console.log(finalGrade(-5, 10, 50));

console.log(finalGrade(10, -10, 50));

console.log(finalGrade(10, 10, -50));








/* <-------reportingForDuty()---------> */

/* 1.
Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’ */

// Write your function here:

function reportingForDuty(rank, lastName) {
  const nameAndRank = (rank + " " + lastName);
  const duty = 'reporting for duty!'
  const attention = (nameAndRank + " " + duty)
  return attention;
}

// Uncomment the line below when you're ready to try out your function



console.log(reportingForDuty('Private', 'Fido')) // 

// Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!








/* <-------Fix the broken code---------> */

/* 1.
We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please? */

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let randomNumber1 = Math.random() * 6 + 1;
  let die1 = Math.floor(randomNumber);
  let randomNumber2 = Math.random() * 6 + 1;
  let die2 = Math.floor(randomNumber);
    return die1 + die2
}

let randomNumber1 = Math.random() * 6 + 1;

console.log(randomNumber1);

let die1 = Math.floor(randomNumber1);

console.log(die1);







/* <-------calculateWeight()---------> */

/* 1.
Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.' */

// Write your function here:

const calculateWeight = (earthWeight, planet) => {
  if ( planet === 'Mercury') {
    return earthWeight * 0.378;
  } else if ( planet === 'Venus') {
    return earthWeight * 0.907;
  } else if ( planet === 'Mars') {
    return earthWeight * 0.377;
  } else if ( planet ==='Jupiter') {
    return earthWeight * 2.36;
  } else if ( planet === 'Saturn') {
    return earthWeight * 0.916;
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}

// Uncomment the line below when you're ready to try out your function

console.log(calculateWeight(100, 'Neptune'));

console.log(calculateWeight(100, 'Mercury'));

console.log(calculateWeight(100, 'Venus')) 

console.log(calculateWeight(100, 'Mars')) 

console.log(calculateWeight(100, 'Jupiter')) 

console.log(calculateWeight(100, 'Saturn')) 

// Should print 236

// We encourage you to add more function calls of your own to test your code!







/* <---------truthyOrFalsy()-----------> */

/* 1.
It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy. */

// Write your function here:

function truthyOrFalsy(value) {
  if (value) {
      return true;
  }
  return false;
}

// Uncomment the line below when you're ready to try out your function

console.log(truthyOrFalsy(false));

console.log(truthyOrFalsy(0));

console.log(truthyOrFalsy(-0));

// console.log(truthyOrFalsy(0)) // Should print false

// We encourage you to add more function calls of your own to test your code!







/* <---------numImaginaryFriends()-----------> */

/* 1.
A person’s number of imaginary friends are always 33% of their total friends.

Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

Since friends can only come in whole numbers, be sure to round your result before returning it.

The JavaScript Math.round() function will come in handy. Check out the documentation here to figure out how it works. */

// Write your function here:

const numImaginaryFriends = (x) => {
  const percFriends = x * 0.33;
  const roundPerc = Math.round(percFriends);
  return roundPerc;
}

// Uncomment the line below when you're ready to try out your function

console.log(3 * 0.33);

console.log(Math.round(0.99));

console.log(numImaginaryFriends(33));

console.log(numImaginaryFriends(18)) // Should print 6

// We encourage you to add more function calls of your own to test your code!








/* <---------sillySentence()-----------> */

/* 1. Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function: */

'I am so excited because I love coding! Time to write some more awesome functions!'

sillySentence('excited', 'love', 'functions');

// Write your function here:

const sillySentence = (x, y, z) => {
  const concat = ('I am so ' + x + ' because I ' + y + ' coding! Time to write some more awesome ' + z + '!')
  return concat;
}


// Uncomment the line below when you're ready to try out your function

console.log(sillySentence('excited', 'love', 'functions'));

// We encourage you to add more function calls of your own to test your code!








/* <-----------howOld()-------------> */

/* 1.
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]' */

// Write your function here:

const howOld = (age, year) => {
  const dob = 2020 - age;
  const ageCalc = year - dob;
  const beforeBday = dob - year;

  const futureAge = 'You will be ' + ageCalc + ' in the year ' + year;

  const beforeBorn = 'The year ' + year + ' was ' + beforeBday + ' years before you were born';

  const pastAge = 'You were ' + ageCalc + ' in the year ' + year;

  if ( year > dob && year > 2020 ) {
    return futureAge;
  } else if ( year < dob ) {
    return beforeBorn;
  } else if ( year < 2020 && year > dob ) {
    return pastAge;
  }
}



// Once your function is written, write function calls to test your code!

console.log(howOld(35, 2030));

console.log(howOld(35, 1945));

console.log(howOld(35, 1990));








/* <--------Fix the broken code (round 2)--------> */

/* 1.
Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.

We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely relationship. We expect the number passed in to always be an integer from 0 to 100, but for some reason it’s not working!

Here’s how it’s supposed to calculate the relationship:

100 should return 'You are likely identical twins.'
35-99 should return 'You are likely parent and child or full siblings.'
14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
6-13 should return 'You are likely 1st cousins.'
3-5 should return 'You are likely 2nd cousins.'
1-2 should return 'You are likely 3rd cousins.'
0 should return 'You are likely not related.'
Unfortunately, it’s not working how we want!

whatRelation(34) 
// Should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// But instead it's returning 'You are likely 1st cousins.'

whatRelation(3)
// Should return 'You are likely 2nd cousins.'
// But instead it's returning 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
Can you fix our code, please? */

const whatRelation = percentSharedDNA => {
  if (percentSharedDNA === 100) {
      return 'You are likely identical twins.'
  }
  if (percentSharedDNA > 35 && percentSharedDNA < 100) {
      return 'You are likely parent and child or full siblings.'
  }
  if (percentSharedDNA > 14 && percentSharedDNA <= 34) {
      return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
  }
  if (percentSharedDNA > 5) {
      return 'You are likely 1st cousins.'
  }
  if (percentSharedDNA > 2) {
      return 'You are likely 2nd cousins.'
  }
  if (percentSharedDNA > 0) {
      return 'You are likely 3rd cousins'
  }
  return 'You are likely not related.'
}

console.log(whatRelation(100));

console.log(whatRelation(75));

console.log(whatRelation(23));

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

// console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'







/* <------------tipCalculator()------------> */

/* 1.
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20/* 
*/

// Write your function here:

const tipCalculator = (quality, total) => {
  if ( quality === 'bad' ) {
    return total * 0.05;
  } else if ( quality === 'ok' ) {
    return total * 0.15;
  } else if ( quality === 'good' ) {
    return total * 0.2;
  } else if ( quality === 'excellent' ) {
    return total * 0.3;
  } else {
    return total * 0.18;
  }
}

// Uncomment the line below when you're ready to try out your function

console.log(tipCalculator('good', 100)) 

//should return 20

// We encourage you to add more function calls of your own to test your code!

console.log(tipCalculator('bad', 100));

console.log(tipCalculator('ok', 100));

console.log(tipCalculator('good', 100));

console.log(tipCalculator('excellent', 100));

console.log(tipCalculator('mediocre', 100));







/* <------------toEmoticon()------------> */

/* 1.
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|' 
*/

// Write your function here:

const toEmoticon = (expression) => {
  switch (expression) {
    case 'shrug':
    return '|_{"}_|';
    case 'smiley face':
    return ':)';
    case 'frowny face':
    return ':(';
    case 'winky face':
    return ';)';
    case 'heart':
    return '<3';
    default:
    return '|_(* ~ *)_|';
  }
}

// Uncomment the line below when you're ready to try out your function

console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!

console.log(toEmoticon('shrug'));

console.log(toEmoticon('smiley face'));

console.log(toEmoticon('frowny face'));

console.log(toEmoticon('winky face'));

console.log(toEmoticon('heart'));

console.log(toEmoticon('angry'));