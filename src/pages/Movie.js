import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMovie(data))
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching movie:', error);
      });
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
         <nav className="navbar"/>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time} minutes</p>
        {movie.genres && movie.genres.length > 0 ? (
          movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))
        ) : (
          <p>No genres available</p>
        )}
      </main>
    </>
  );
}

export default Movie;
