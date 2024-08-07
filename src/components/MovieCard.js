import React from 'react';
import {Link} from 'react-router-dom';

function MovieCard({title,id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <a href={`http://localhost/movie/${id}`}>View Info</a>
    </article>
  );
};

export default MovieCard;