import React from "react";

export default function MainPage() {
  return (
    <>
      <h1>Movie World</h1>
      <ul>
        <li>
          <h3>현재 상영중</h3>
        </li>
        <li>
          <img src="./preImg.png"></img>
          <p>제목</p>
        </li>
      </ul>
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
