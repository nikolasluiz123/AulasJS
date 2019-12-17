const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map((number, index) => number + index);

const sum = arr.reduce((total, next) => total + next);

const filter = arr.filter(number => number % 2 === 0);

const find = arr.find(number => number === 2);
console.log(find);