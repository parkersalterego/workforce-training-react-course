export const MovieDetails = ({ movie }) => {
    console.log("movie", movie);

    const myObj = {
        name: "Adam",
        age: 29
    };

    const { name, age } = myObj;

    console.log(name);
    console.log(age);
        
    return (
        <div>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{ movie.Title + " (" + movie.Year + ")" }</h2>
        </div>
    )
}