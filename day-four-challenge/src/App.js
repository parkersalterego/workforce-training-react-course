import './App.css';
import { MovieList } from './components/movieList';

const movies = [{"Title":"Jaws","Year":"1975","imdbID":"tt0073195","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Jaws 2","Year":"1978","imdbID":"tt0077766","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BN2U1MWE1NTMtYjQ2ZC00MTFmLWFmYjItODMyNGYxOTAyZmEzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Jaws: The Revenge","Year":"1987","imdbID":"tt0093300","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNGI1MTAxMWItOTE0OC00ZDhkLWE3Y2EtNjFiZmQ4NjQ1NGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Jaws 3-D","Year":"1983","imdbID":"tt0085750","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2QwYjhiMzQtN2RiYS00MzgxLThmNzItMmJlNmMyMmQyYTA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Jaws 19","Year":"2015","imdbID":"tt5033000","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjRmMzYzMTctZmE5MC00NWZjLTk5YmItYjQ1YTljMDdlYWYxXkEyXkFqcGdeQXVyNDcwNDE0Nzk@._V1_SX300.jpg"},{"Title":"Cruel Jaws","Year":"1995","imdbID":"tt0112747","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTgxN2I4ZjEtMjAyZS00MzM5LWE0MjAtZmQ4M2UyMjgwODcwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Santa Jaws","Year":"2018","imdbID":"tt8305692","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjdmZjQ2ODktMzUwYy00MWRlLThiZWYtMzFkODBlN2I1OWZhXkEyXkFqcGdeQXVyMzQ5OTc2Mzk@._V1_SX300.jpg"},{"Title":"In the Jaws of Life","Year":"1984","imdbID":"tt0088312","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTIzNjU2ODUwOV5BMl5BanBnXkFtZTYwMzc2MDg4._V1_SX300.jpg"},{"Title":"Jaws of Satan","Year":"1981","imdbID":"tt0082580","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUyOTY4Mzc0N15BMl5BanBnXkFtZTcwNTY2NjE2NA@@._V1_SX300.jpg"},{"Title":"Mako: The Jaws of Death","Year":"1976","imdbID":"tt0074845","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODJiZmI1Y2ItMjBiNS00NGU0LTk2NmQtNGQ0YmVkYjNiNjlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}];

function App() {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
