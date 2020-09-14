let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//1. Use an array to remove the last string of the array
secretMessage.pop();
//console.log(secretMessage);

//2. Check the length of the new array
//console.log(secretMessage.length);

//3. Use an array method toi add 'to' and 'Program'
secretMessage.push('to', 'Program');
//console.log(secretMessage);

//4. Use an array method to remove the first string
secretMessage.shift();
//console.log(secretMessage);

//5. Add 'Programming' to the beginning of the array
secretMessage.unshift('Programming');
//console.log(secretMessage);

//6. Use an array method to remove getrightthefirstime
secretMessage.splice(6, 5, 'know');
//console.log(secretMessage);

//7. Use console.log and .join to print the message
console.log(secretMessage.join(' '));