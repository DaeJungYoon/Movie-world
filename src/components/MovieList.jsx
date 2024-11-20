import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function MovieList(props) {
  const { kategorieTitle, movies } = props;
  return (
    <div>
      <h2>{kategorieTitle}</h2>

      <p>
        <Link to={`/kategorie/${kategorieTitle}`}>...more</Link>
      </p>
      <ul style={{ display: "flex" }}>
        {movies.map((item) => {
          return <MovieCard key={item.id} item={item}></MovieCard>;
        })}
      </ul>
    </div>
  );
}
