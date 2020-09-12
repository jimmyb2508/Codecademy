let raceNumber = Math.floor(Math.random() * 1000);

const early = true;

const age = 10;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`Runner: ${raceNumber}. You're race begins at 9:30am`);
} else if (!early && age > 18) {
  console.log(`Runner: ${raceNumber}. You're race begins at 11:00am`);
} else if (age < 18) {
  console.log(`Runner: ${raceNumber}. You're race begins at 12:30pm`);
} else if (age === 18) {
  console.log(`Please see the registration desk`);
}
