import axios from 'axios';

const apiKey = 'f185c2da';

export default class MovieService {
    // async getMovies(title) {
    //     const response = await fetch(
    //         `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`,
    //         { method: "GET" }
    //     );
    //     return response.json();
    // }

    async getMovieById(id) {
        const response = await fetch(
            `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`,
            { method: "GET" }
        )

        return response.json();
    }

    getMovies(title) {
        return axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    }
}