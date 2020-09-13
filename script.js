'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let lastMovie, rating;

for (let x = 0; x < 2; x++){
    lastMovie = prompt('Один из последних фильмов?', '');
    rating = +prompt('Оцнка?', '');
    personalMovieDB.movies[lastMovie] = rating;
}
console.log(personalMovieDB);