'use strict';

const musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

console.log('----------------------------------------------------------------');

musketeers.push(`D'Artagnan`);

musketeers.forEach(man => console.log(man));

musketeers.splice(2, 1);

console.log('----------------------------------------------------------------');

for (let man of musketeers) {
  console.log(man);
}

let values = [3, 11, 7, 2, 9, 10];

values = values.reduce((acc, val) => acc + val, 0);

console.log(values);

let values2 = [3, 11, 7, 2, 9, 10];

values2 = Math.max(...values2);

console.log(values2);

const aurora = {
  health: 100,
  strength: 25,
  xp: 0,
  describe() {
    console.log(
      `Aurora has ${this.health} health, ${this.strength} strength, and ${this.xp} XP points`
    );
  },
};

aurora.describe();

const dog = {
  name: 'fido',
  species: 'pug',
  size: 'small',
  bark() {
    return 'WOOF!';
  },
};

console.log(`${dog.name} is a ${dog.species} measuring ${dog.size} size`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// const r = +prompt('Enter the circle radius:');

const screen = document.querySelector('.screen');
const button = document.querySelector('.button');
const area = document.querySelector('.buttonArea');
const circ = document.querySelector('.buttonCirc');

button.addEventListener('click', function (event) {
  circle.getRadius();

  screen.innerHTML = `Radius: ${circle.radius}`;
});
area.addEventListener('click', function (event) {
  screen.innerHTML = circle.area();
});
circ.addEventListener('click', function (event) {
  screen.innerHTML = `Circumference: ${circle.circumference()}`;
});

const circle = {
  radius: 0,
  getRadius() {
    this.radius = +prompt('Enter the circle radius:');
  },
  circumference() {
    return this.radius * 2 * Math.PI;
  },
  area() {
    return Math.PI * this.radius ** this.radius;
  },
};

const account = {
  name: 'Alex',
  balance: 0,
  credit(num) {
    this.balance += num;
  },
  debit(num) {
    this.balance -= num;
  },
  showBalance() {
    console.log(this.balance);
  },
};

account.credit(30);
account.credit(50);
account.debit(79);
account.showBalance();

console.log(
  '-----------------------------JAVASCRIPT.Info-----------------------------------'
);

function camelize(str) {
  const string = str
    .split(/[^a-zA-Z]/)
    .map((word, i) => {
      return i > 0 ? word[0].toUpperCase() + word.slice(1) : word;
    })
    .filter(word => {
      return word !== '';
    })
    .join('');

  console.log(string);
}

camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';

function filterRange(arr, start, end) {
  arr = arr.slice().filter(num => {
    return num >= start && num <= end;
  });

  console.log(arr);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
console.log(arr);

function filterRangeInPlace(arr, start, end) {
  arr.forEach((num, i) => {
    if (num < start || num > end) {
      arr.splice(i, 1);
    }
  });
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);

let arrSortDesc = [5, 2, 1, -10, 8];

arrSortDesc.sort((a, b) => b - a);

console.log(arrSortDesc);

const copyASort = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
  return arr.slice().sort();
}

const sorted = copySorted(copyASort);

console.log(sorted);
console.log(copyASort);

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.calculate('12 + 12');
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result);

console.log('---------map to names-------------');
/*
let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];
let names = [];

users.forEach(user => {
  names.push(user.name);
});



console.log(names); // John, Pete, Mary
*/
/*
let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: `${user.id}`,
}));
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
*/
/*
let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arr2 = [pete, john, mary];

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr2);

// now: [john, mary, pete]
console.log(arr2[0].name); // John
console.log(arr2[1].name); // Mary
console.log(arr2[2].name); // Pete

let arr3 = [1, 2, 3];

function shuffle(arr) {
  // current index to keep track of how many items are left to shuffle
  let currentIndex = arr.length,
    randomIndex;

  // while current index isnt zero (no items left to shuffle)
  while (currentIndex !== 0) {
    // generate a random index
    randomIndex = Math.floor(Math.random() * currentIndex);
    // decrease the current index by 1
    currentIndex--;

    //swap array current index with array at random index
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  // return array
  console.log(arr);
}

shuffle(arr3);
shuffle(arr3);
shuffle(arr3);
*/

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr2 = [john, pete, mary];

function getAverageAge(arr) {
  return arr.map(name => name.age).reduce((a, b) => a + b) / arr.length;
}

console.log(getAverageAge(arr2)); // (25 + 30 + 29) / 3 = 28

function unique(arr) {
  return [...new Set(arr)];
}

let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(strings)); // Hare, Krishna, :-O

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(arr) {
  return arr.reduce((object, value) => {
    object[value.id] = value;
    return object;
  }, {});
}

let usersById = groupById(users);

console.log(usersById);

// check if number is a factor
function checkForFactor(base, factor) {
  return base % factor === 0;
}

// sum digits pow
function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let sum = 0;
    for (let j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j + 1);
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}
