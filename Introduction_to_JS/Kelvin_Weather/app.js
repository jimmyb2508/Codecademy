// Kelvin is a constant variable equal to 293 //
const kelvin = 300;
console.log(kelvin);
// Celsius is the same as Kelvin minus 273 //
const celsius = kelvin - 273;
console.log(celsius);
/* Fahrenheit is equal to celsius times 9 divided by 5 plus 32 */
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);
/* Rounds down Fahrenheit to the nearest decimal point */
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

/* Convert celsius to the Newton Scale */
let newton = celsius * (33/100);
console.log(newton);
//Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);