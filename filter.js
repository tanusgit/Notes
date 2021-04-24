const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(a => {
    return a < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
//the favoriteWords array to return elements that have more than 7 characters.
const longFavoriteWords = favoriteWords.filter(a => {
  return a.length > 7;
});
// Call .filter() on favoriteWords below

