"use strict";

let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const person = "5";

const bool = false;

console.log(something);

let und;
console.log(und);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

//console.log(obj.name);
console.log(obj["name"]);


let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp'];
console.log(arr[1]);

const max = Number.MAX_SAFE_INTEGER;
console.log(max + 2);

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
console.log(alert);

let user = {
    name: "Vasya"
};

let id = Symbol("id");

user[id] = 1;

//alert( user[id] );
console.log(user);