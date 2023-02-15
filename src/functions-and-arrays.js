
// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a;
  }else if (a == b){
    return a;
  }else{
    return b;
  };
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  let word = "";

  if (array.length === 0) {
    return null;
  } else if(array.length === 1) {
    return array[0];
  }
  
  let longestWord = "";
  for (i = 0; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(series) {
  if (series.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < series.length; i++) {
    sum += series[i];
  }
  return sum;
}



// Iteration #3.1 Bonus:

function sum(series) {
  if (series.length === 0) {
    return 0;
  }

  let result = 0;
  for (let i = 0; i < series.length; i++) {
    let value = 0;
    if (typeof series[i] === 'string') {
      value = series[i].length;
    } else if (typeof series[i] === 'boolean') {
      if (series[i]) {
        value = 1;
      }
    } else if (typeof series[i] === 'number') {
        value = series[i];
    }
    result += value;
  }
  return result;
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length === 0) {
    return null;
  }
  let total = sumNumbers(arr)
  return total / arr.length
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  if (words.length === 0) {
    return null;
  }
  let count = 0;
  for (let word of words) {
    count += word.length
  }
  return count / words.length
}

// Bonus - Iteration #4.1

function avg(mixedArr) {
  if (mixedArr.length === 0) {
    return null;
  }
  let total = sum(mixedArr)
  return total / mixedArr.length
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(listOfWords) {
  if (listOfWords.length === 0) {
    return null;
  }
  let newList = [];

  for (let word of listOfWords) {
    if (!newList.includes(word)) {
      newList.push(word);
    }
  }
  return newList;
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(searchList, searchWord) {
  if (searchList.length === 0) {
    return null;
  }
  if (searchList.includes(searchWord)) {
    return true;
  } else {
    return false;
  }
}


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(listOfWords, wordToSearch) {
  if (listOfWords.length === 0) {
    return 0;
  }
  let count = 0;
  for (let word of listOfWords) {
    if (word === wordToSearch) {
      count += 1
    }
  }
  return count;
}
