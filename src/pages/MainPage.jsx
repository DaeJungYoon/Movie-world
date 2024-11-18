import React from "react";
import MovieKategorie from "./MovieKategorie";

export default function MainPage() {
  return (
    <>
      <h1>Movie World</h1>
      <MovieKategorie></MovieKategorie>
      <ul>
        <li>
          <h3>인기있는 영화</h3>
        </li>
        <li>
          <img src="./preImg.png"></img>
          <p>제목</p>
        </li>
      </ul>
      <ul>
        <li>
          <h3>영화 순위</h3>
        </li>
        <li>
          <img src="./preImg.png"></img>
          <p>제목</p>
        </li>
      </ul>
    </>
  );
}
