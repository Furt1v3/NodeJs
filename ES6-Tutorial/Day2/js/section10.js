// array.of()
let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3

let chars = Array.of('A', 'B', 'C');
console.log(chars.length); // 3
console.log(chars); // ['A','B','C']

// arrayFrom
function arrayFromArgs() {
  var results = [];
  for (var i = 0; i < arguments.length; i++) {
      results.push(arguments[i]);
  }
  return results;
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);

// arrayFromArgs.find
let customers = [{
  name: 'ABC Inc',
  credit: 100
}, {
  name: 'ACME Corp',
  credit: 200
}, {
  name: 'IoT AG',
  credit: 300
}];

console.log(customers.find(c => c.credit > 100));

// array findIndex()
let ranks = [1, 5, 7, 8, 10, 7];

let index = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
);

console.log(index);

const products = [
  { name: 'Phone', price: 999 },
  { name: 'Computer', price: 1999 },
  { name: 'Tablet', price: 995 },
];

const index1 = products.findIndex(product => product.price > 1000);

console.log(index1); // 1