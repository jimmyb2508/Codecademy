// Determine how may hours of sleep for each night.
const getSleepHours = (day) => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  }
};
console.log(getSleepHours('sunday'));

// Determine the total sleep hours actually slept.
// Function for getActualSleepHours() calls getSleepHours();

/* const getActualSleepHours = () =>
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); */

//Function for getActualSleepHours() that doesn't call getSleepHours();

const getActualSleepHours = () => 10 + 8 + 8 + 8 + 8 + 8 + 8;

console.log(getActualSleepHours());

//Determine the ideal sleep hours that you prefer.
/*const getIdealSleepHours = () => {
const idealHours = 8;
return idealHours * 7;
}; */

const getIdealSleepHours = idealHours => idealHours * 7;

//console.log(getIdealSleepHours(10));

//Calculate the sleep debt.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(40);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got enough sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + 'hour(s) more sleep than you needed this week!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week!');
  } else
    console.log('Something went wrong!');
};

calculateSleepDebt();