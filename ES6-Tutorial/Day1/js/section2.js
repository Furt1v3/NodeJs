function getScore(){
  return [70,80,90,100];
}
// let [x,y,z] = getScore();
// console.log(x);
// console.log(y);
// console.log(z);

let [x, y ,...args] = getScore();
console.log(x); 
console.log(y); 
console.log(args); 

function getItems() {
  return [10, 20];
}

let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;

console.log(thirdItem);

let a, b;
[a = 1, b = 2] = [10];
console.log(a); 
console.log(b); 

function getProfile() {
  return [
      'John',
      'Doe',
      ['Red', 'Green', 'Blue']
  ];
}

let [
  firstName,
  lastName,
  [
      color1,
      color2,
      color3
  ]
] = getProfile();

console.log(firstName, lastName, color1, color2, color3);

function stat(a, b) {
  return [
      a + b,
      (a + b) / 2,
      a - b
  ]
}

let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30, 15, 10

let person = {
  name: 'John',
  age: 24,
};

let { name, age,place } = person;
console.log(name,age,place);
