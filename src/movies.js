// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
const directors = moviesArray.map((movie) => {
  return movie.director }) 
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const SpielbergDrama = moviesArray.filter(function(Movie) {
    return Movie.director == "Steven Spielberg" && Movie.genre.includes("Drama")
   
   }); 
   console.log(SpielbergDrama);
     return SpielbergDrama.length;
}

// 1. Reach the movies database - done
// 2. Find the filter the dramas(movies.genre === "drama") and the director (movies.director === Spielb) -- done
// 3 Get a the result in a number. - done




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
// if the array is empty it will give back 0
  let movieTotalscore = moviesArray.reduce((acc, moviescore) => {
   if (moviescore.score === undefined) {
    return acc;
    // should return average even if one of the movies does not have score
   }
   else {
    return acc + moviescore.score
   }
   // with this the sum of scores will be calculated
  }, 0);

  let avarageOfMovieScores = movieTotalscore / moviesArray.length
  // avarage of the scores
  return Math.round(avarageOfMovieScores * 100) / 100;
  // rounding to 2 decimals. 
}; 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   let filmDrama = moviesArray.filter(dramaFilms => {
    return dramaFilms.genre.includes("Drama") 
   });

   
   
   let scoreDrama = filmDrama.reduce((accumulator, dramaScore) => {
     if (dramaScore.score === undefined) {
      return accumulator;
     } 
     else {
      return accumulator + dramaScore.score;
     }
   }, 0);
     
       let avarageOfDramaFilms = scoreDrama / filmDrama.length;
       return Math.round(avarageOfDramaFilms * 100) / 100;
}
    
 
//1.  Go through the array which and find the drama movies (filter and includes)
//2.  Calculate the total score of the drama moves ()
//3.  Calculate the avarage score. 





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  releaseYear = moviesArray.filter(date => date.year > 0); 
  
  releaseOrder = releaseYear.sort((a, b) => {
   
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
});
     
  return releaseOrder; 
   
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
 let onlyTitle = moviesArray.slice(0, 21).map(titleFilm => {
  return titleFilm.title;
 });
 
  let titlesAlphabetical = onlyTitle.sort((a, b ) => a.title.localeCompare(b.title));
  return titlesAlphabetical;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
