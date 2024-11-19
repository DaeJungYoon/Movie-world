import React from "react";

export default function MovieCard(props) {
  // console.log(props);
  const { items } = props;

  return (
    <li key={items.id}>
      <img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} />
      <h4>{items.title}</h4>
    </li>
  );
}
