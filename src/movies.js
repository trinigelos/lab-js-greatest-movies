// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// import { movies } from './data.js';

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  const uniqueDirectors = [...new Set(directors)];
  return uniqueDirectors;
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenSpielbergMovies = moviesArray.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  const stevenSpielbergDramaMovies = stevenSpielbergMovies.filter((movie) =>
    movie.genre.includes('Drama')
  );
  return stevenSpielbergDramaMovies.length;
}
// console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

  function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
  
    const validMovies = moviesArray.filter(movie => typeof movie.score === 'number' && movie.score !== '');
  
    if (validMovies.length === 0) return 0;
  
    const totalScore = validMovies.reduce((acc, movie) => acc + movie.score, 0);
    const average = totalScore / validMovies.length;
    return parseFloat(average.toFixed(2));
  }
  


// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );
  if (dramaMovies.length === 0) return 0;
  const totalScore = dramaMovies.reduce(
    (acc, movie) => acc + (movie.score || 0),
    0
  );
  const averageScore = totalScore / dramaMovies.length;
  return parseFloat(averageScore.toFixed(2));
}
// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = [...moviesArray]; // copy of the arr
  return newArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title); // if its the same year: compare titles
    }
    return a.year - b.year;
  });
}
// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArray = [...moviesArray]; //copy of the array
  newArray.sort((a, b) => a.title.localeCompare(b.title)); //compare titles abc
  const titles = newArray.map((movie) => movie.title);
  return titles.slice(0, 20);
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const newMovie = { ...movie }; // Create a shallow copy of the movie object to avoid mutatin it

    const duration = movie.duration;
    const hoursMatch = duration.match(/(\d+)h/); //regular expressions that match hours and minutes
    const minutesMatch = duration.match(/(\d+)min/);

    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0; //checks if hours is null_ if not: parse it into an integer
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;

    newMovie.duration = hours * 60 + minutes; //converts hours to minutes

    return newMovie;
  });
}
// console.log(turnHoursToMinutes(movies));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes
  };
}
