"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

while (numberOfFilms <= 0) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastMovie,
    rating,
    x = 0;

while (x < numberOfFilms) {
    lastMovie = prompt("Один из последних фильмов?", "");
    while (lastMovie.length > 50 || lastMovie.length == 0) {
        lastMovie = prompt("Один из последних фильмов?", "");
    }
    rating = prompt("Оценка?", "");
    while (rating.length == 0 || +rating > 10 || +rating < 0) {
        rating = prompt("Оценка?", "");
    }
    personalMovieDB.movies[lastMovie] = +rating;
    x++;
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (10 <= personalMovieDB.count <= 50) {
    console.log("Вы - классический зритель");
} else {
    console.log("Вы - заядлый киноман");
}

function showStatus() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    let x = 0;
    while (x < 3){
        let ans = prompt("Любимый жанр?", '');
        if (isNaN(ans)){
            personalMovieDB.genres[x] = ans;
            x++;
        }
        else {
            alert("Повторите ввод");
        }
    }
}

showStatus();
writeYourGenres();