import { useState, useEffect } from "react";
import MovieService from '../services/movie.service';
import { Modal } from './modal';
import { MovieDetails } from './movieDetails';

export const MovieList = () => {
    const { getMovies } = new MovieService();
    const [movieList, setMovieList] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState();
  
    const getMovieList = async (title) => {
      const movies = await getMovies(title);
      setMovieList(movies.Search)
    };

    const onClose = () => setshowModal(false);
  
    useEffect(() => {
      getMovieList('star wars');
    }, []);

    const showMovieDetails = (id) => {
        setshowModal(true);
        setSelectedMovie(id);
    }

    return (
        <div>
            { 
                showModal
                    ? null
                    : (
                        movieList.map(({ Poster, Title, imdbID }) => {  
                            return (
                                <div key={imdbID}>
                                <img src={Poster} alt={`${Title} `} />
                                <h5>{ `${Title}` }</h5>
                                <button onClick={() => showMovieDetails(imdbID)}>Details</button>
                            </div>
                            );
                        })
                    )
            }
            <Modal show={showModal} onClose={onClose}>
                <MovieDetails id={selectedMovie} />
            </Modal>
        </div>
    )
}