class person {
  constructor (name,age){
    this.name = name;
    this.age = age
  }
  getName(){
    this.name = "nyan";
  }
}
let p = new person("nlh" , 24);
console.log(p);

class Person1 {
  constructor(name) {
      this.setName(name);
  }
  getName() {
      return this.name;
  }
  setName(newName) {
      newName = newName.trim();
      if (newName === '') {
          throw 'The name cannot be empty';
      }
      this.name = newName;
  }
}

let p1 = new Person1('Jane Doe');
console.log(p1); // Jane Doe

p1.setName('Jane Smith');
console.log(p1.getName()); // Jane Smith

function factory(aClass) {
  return new aClass();
}

let greeting = factory(class {
  sayHi() { console.log('Hi'); }
});

greeting.sayHi(); // 'Hi'

class human {
  constructor(name){
    console.log("I am constructor");
  }
  static showName(){
    console.log("I am Static Method");
  }
}
let h = new human();
human.showName();

function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function() {
  console.log('walking on ' + this.legs + ' legs');
}

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;


Bird.prototype.fly = function() {
  console.log('flying');
}

var pigeon = new Bird(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly();  // flying

