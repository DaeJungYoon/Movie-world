import React from "react";

export default function MovieList(props) {
  const { kategorieTitle, movies } = props;
  return (
    <div>
      <h2>{kategorieTitle}</h2>
      <p>...more</p>
      <ul>
        {movies.map((item) => {
          const { id, title, poster_path } = item;
          return (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
              <h4>{title}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
