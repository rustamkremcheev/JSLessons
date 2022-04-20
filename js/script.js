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

let numberOfFilms;

function start () {
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?'); 
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: null,
    genres: [],
    privat: false
};


/*let film = prompt('Один из последних просмотренных фильмов?');
let score = prompt('На сколько оцените его?');

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

personalMovieDB.movies = {
    [film]: [score], 
    [a] : [b]
};*/

console.log(personalMovieDB.movies);

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = [b];
personalMovieDB.movies[c] = [d];

console.log(personalMovieDB.movies);