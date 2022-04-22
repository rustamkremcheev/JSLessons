'use strict';

const arr = [1, 2, 3, 6, 8];

const arrStr = ['4', '5', '11', '1', '2', '3', '6', '8'];

console.log(arrStr.sort());




//arr.pop();
arr.push(10);

//console.log(arr);

//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

/*for (let value of arr) {
    console.log(value);
}*/


/*arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});*/

const str = prompt("","");
const products = str.split(",");
products.sort();

console.log(products.join('; '));
