/*
Task 6 - Movie rating tracker
Write a program that allows users to track and rate their favorite movies. The program should prompt the user to enter the details of each movie, including the title and rating on a scale of 1 to 5. The program should store the user input in an array of objects using object literals. Once all the movie ratings have been entered, the program should sort the movies based on their ratings and determine the highest-rated movie. Finally, it should display the sorted list of movies and the highest-rated movie on the HTML document.
- Use object literals to represent each movie, with properties such as title and rating.
- Prompt the user to enter the number of movies they want to rate.
- Use a loop to gather user input for each movie, including the title and rating. Store the movie details in an array of objects.
- Sort the array of movie objects based on the ratings, from highest to lowest.
- Determine the highest-rated movie by accessing the first element of the sorted array.
- Display the sorted list of movies and the highest-rated movie on the HTML document.
*/

function isNumber(value) {
  return (
    typeof value === 'string' && !isNaN(value) && !isNaN(parseFloat(value))
  );
}

function collectMovieDetails() {
  let validNumber = false;
  let movieCount;

  // ask count of movies
  while (!validNumber) {
    movieCount = prompt('Enter the number of movies to rate:');

    if (isNumber(movieCount) && movieCount >= 0) {
      movieCount = parseInt(movieCount);
      validNumber = true;
    }

  }

  // collect movies
  for (let i = 0; i < movieCount; i++) {
    let title = prompt(`Enter the title of ${i + 1}. movie:`);

    let validRating = false;
    let rating;

    while (!validRating) {
      rating = prompt(`Enter the rating of movie "${title}" (1-5):`);

      if (isNumber(rating) && rating >= 1 && rating <= 5) {
        validRating = true;
        rating = parseFloat(rating);
        rating = rating.toFixed(1); // format to have one decimal place
      }
    }

    saveMovie(title, rating);
  }
}

function saveMovie(title, rating) {
// create object literal
  const movie = {
    title: title,
    rating: rating,
  };

  // add into movies array
  movies.push(movie);
}

function sortByRatings(moviesArray) {

  const compare = (b, a) => {
    if (a.rating < b.rating) {
      return -1;
    } else if (a.rating > b.rating) {
      return 1;
    }
    return 0;   // equal values
  }


  return moviesArray.sort(compare);
}

function displayMovies(movies) {
  const main = document.querySelector('main');

  // set list title
  const headingElem = document.createElement('h3');
  headingElem.innerText = 'Movies Sorted By Ratings:';
  main.appendChild(headingElem);

  const olElement = document.createElement('ol');
  main.appendChild(olElement);

  // show movies in order
  for (let movie of movies) {
    const liElement = document.createElement('li');
    liElement.innerText = `"${movie.title}", Rating: ${movie.rating}`;
    olElement.appendChild(liElement);

  }

  // highest-rated movie
  const p = document.createElement('p');
  p.innerText = `Highest-rated movie: ${sortedMovies[0].title} (${sortedMovies[0].rating})`;
  main.appendChild(p);

}

let movies = [];

collectMovieDetails();
const sortedMovies = sortByRatings(movies);
displayMovies(sortedMovies);
