import { useState } from 'react';

import { Modal } from './modal';
import { MovieDetails } from './movieDetails';

export const MovieList = ({ movies }) => {
    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState();


    const onClose = () => setShow(false);

    const onViewDetailsClick = (index) => {
        setMovie(movies[index]);
        setShow(true);
    }

    return (
        <div>
            {
                movies.map((movie, index) => (
                    <div key={index}>
                        <div>
                            <h5>{movie.Title}</h5>
                            <button
                                onClick={() => onViewDetailsClick(index) }
                            >View Details</button>
                        </div>
                    </div>
                ))
            }
            <Modal show={show} onClose={onClose}>
                <MovieDetails movie={movie} />
            </Modal>
        </div>
    );
}