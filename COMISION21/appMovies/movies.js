const fs = require('fs');

const dataMovies = require ('./dataMovies');

let dataMoviesJSON = JSON.stringify(dataMovies,null,3);
fs.writeFileSync('datMovies.json',dataMoviesJSON, 'utf-8' );
