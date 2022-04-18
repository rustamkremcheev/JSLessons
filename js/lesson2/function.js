"use strict";

function showFirstMessage(text) {
    console.log(text);

    let num = 20;
}

showFirstMessage("Hello World!");

function calc(a, b) {
    return a + b;
}

console.log(calc(3,4));
console.log(calc(7,1));
console.log(calc(12,4));
console.log(calc(5,8));

function ret() {
    let num = 50;

    //

    return num;
}


const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello!");
};

logger();


//const calc = (a, b) => {return a + b}; 
//const calc = a =>  a + 2 ;
const calc = (a, b) =>  a + b ; 
console.log(calc(1, 2));