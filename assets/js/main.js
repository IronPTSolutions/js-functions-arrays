
function greet(name = 'World') {
  return `Hello ${name}!`;
}

console.log(greet('Ironhack'));
console.log(greet());

function isVocal(char) {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

function countVocals(text) {
  if (!text) {
    throw new Error(`The text can't be empty`);
  }
  
  let count = 0;
  for (let char of text) {
    if (isVocal(char)) {
      count++;
    }
  }
  return count;
}

// console.log(countVocals()); // ---> must throw an error!
console.log('Number of vocals:', countVocals(`aeiou`));
console.log('Number of vocals:', countVocals(`aeiou`.repeat(3)));
console.log('Number of vocals:', countVocals(`abcde`));

function reverseNumber(number) {
  let numberAsString = `${number}`;
  let result = '';
  for (let i = numberAsString.length - 1; i >= 0; i--) {
    result += numberAsString[i];
  }
  return Number(result);
}

console.log(reverseNumber(123))

function smallestWord(words = []) {
  let smallest;
  for (let word of words) {
    if (!smallest || smallest.length > word.length) {
      smallest = word;
    }
  }
  return smallest;
}

console.log('The smallest word is:', smallestWord()); // ---> must return undefined
console.log('The smallest word is:', smallestWord(["home", "pencil", "dog"]));
console.log('The smallest word is:', smallestWord(["abc", "ab", "a"]));

function smallestNumber(numbers = []) {
  let smallest;
  for (let number of numbers) {
    if (!smallest || number < smallest) {
      smallest = number
    }
  }
  return smallest;
}

console.log('The smallest number is:', smallestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -1]));


function sumAll(numbers = []) {
  let sum = 0;
  for (let number of numbers) {
    sum += number
  }
  return sum;
}

console.log('The sum is:', sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function getEvenNumbers(numbers = []) {
  const evenNumbers = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

console.log('Even numbers:', getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function randomElement(elements = []) {
  if (!elements) {
    return undefined;
  }
  const position = Math.floor(Math.random() * elements.length);
  return elements[position];
}

console.log('Random element', randomElement([]));
console.log('Random element', randomElement());
console.log('Random element', randomElement(['a', 'b', 'c', 'd']));

function removeElement(list = [], element) {
  const position = list.indexOf(element);
  if (position === -1) {
    return list;
  } else {
    list.splice(position, 1);
    return list;
  }
}


const list = [10, 20, 30, 40];
console.log('Elements result:', removeElement(list, 20));
console.log('Elements result:', list); // Be careful, 'list' is just the array reference and the content can mutate!
