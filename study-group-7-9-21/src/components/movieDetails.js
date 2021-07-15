import { useEffect, useState } from 'react';
import MovieService from '../services/movie.service';

export const MovieDetails = ({id}) => {
    const { getMovieById } = new MovieService();
    const [movie, setMovie] = useState();
    
    const getMovie = async (id) => {
        const movieResponse = await getMovieById(id);

        setMovie(movieResponse);
    }

    useEffect(() => getMovie(id), [id]);



    return movie
        ? (
            <div>
                 <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <div>
                   <h2>{movie.Title} <span>{ movie.Ratings[0].value }</span></h2>
                   <div>
                       <div>{ movie.Rated }</div>
                       <div>{ movie.Runtime }</div>
                       <div>{ movie.Genre }</div>
                   </div>
                   <div>
                       <h5>Plot</h5>
                       <p>{ movie.Plot }</p>
                   </div>
                   <div>
                       <h5>Actors</h5>
                       <p>{ movie.Actors }</p>
                   </div>
                </div>
            </div>
        )
        : (<div>
            <h2>Loading...</h2>
        </div>);
}