import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const { kategorieTitle, movies } = props;
  return (
    <div>
      <h2>{kategorieTitle}</h2>
      <p>...more</p>
      <ul>
        {movies.map((item) => {
          return <MovieCard items={item}></MovieCard>;
        })}
      </ul>
    </div>
  );
}
