// lodash project

const _ = {

  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if ( end === undefined ) {
      end = start
      start = 0
    }
    if ( start > end ) {
      const temp = end
      end = start
      start = temp
    }
    const isInRange = start <= number && number < end; 
    return isInRange
  },

  words(words) {
    const nameList = words.split(' ')
    return nameList
  },

  pad(string, length) {
    if (string.length >= length ) {
      return string;
    };
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },

  has(object, key) {
    const hasValue = object[key];
    if (hasValue != undefined) {
      return true
    } return false;
  },

  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject = {originalValue : key}
    }
    return invertedObject;
  },

  findKey(object, predicate) {
    for(let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue) {
        return key;
      }
    }
    undefined
    return undefined;
  },

  drop(arr, number) {
    if ( number === undefined ) {
      return arr.slice(1);
    } else {
      return arr.slice(number)
    }
  },

  dropWhile(arr, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, arr);
    }
    let dropNumber = arr.findIndex(cb);
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },

  chunk(array, size=1) {
   let arrayChunks = [];
   for (let i = 0; i < array.length; i+= size) {
     let arrayChunk = array.slice(i, i+size);
     arrayChunks.push(arrayChunk);
   }
   return arrayChunks;
  }

};


// Do not write or modify code below this line.
module.exports = _;