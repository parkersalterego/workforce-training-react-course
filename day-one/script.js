let myMovieList;
let myMovie;

const myApiKey = // PUT YOUR API KEY HERE

async function fetchMovieDataByName(title) {
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${myApiKey}`);
    myMovieList = response.json();
}

async function fetchMovieDataById(id) {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${myApiKey}`);
    myMovie = response.json();
}

await fetchMovieDataByName("star wars");
await fetchMovieDataById("tt0080684");

console.log(await myMovieList);
console.log(await myMovie);