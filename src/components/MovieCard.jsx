import React from "react";

export default function MovieCard(props) {
  // console.log(props);
  const { item } = props;

  return (
    <li key={item.id}>
      <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
      <h4>{item.title}</h4>
    </li>
  );
}
