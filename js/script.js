let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

//BigInt bNum = 102323345324234;
//console.log(bNum);

let und;
console.log(und);

const obj = {
    name: "John",
    age: 50,
    isMarried: false
};

//obj.a = 30;

console.log(obj);


console.log(name);
var name = 'Ivan';


const bool = true;
console.log(bool);

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Hello, ${user}`);


let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: null,
    genres: [],
    privat: false
};

let film = prompt('Один из последних просмотренных фильмов?');
let score = prompt('На сколько оцените его?');

personalMovieDB.movies = {
    [film]: score
};

console.log(personalMovieDB.movies);