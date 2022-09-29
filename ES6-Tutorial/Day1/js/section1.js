let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); 
}
console.log(x);

var a = 10;
console.log(window.a); 

let b = 20;
console.log(window.b);

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
      console.log(i);
  }, 1000);
}

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}