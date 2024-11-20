import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import nowPlayingApi from "../api/nowPlayingApi";
import { nowPlayingApi, popularApi, topRatedApi } from "../api/movieApi";
import { combineSlices } from "@reduxjs/toolkit";
import MovieList from "../components/MovieList.jsx";

export default function MovieKategorie() {
  // const navigate = useNavigate();
  // const [nowPlaying, setNowPlaying] = useState([]);
  // const [pupulars, setPupulars] = useState([]);
  // const [topRateds, setTopRateds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        // 데이터 요청 3번
        const nowdata = await nowPlayingApi.getNowPlaying();
        const topdata = await topRatedApi.getTopRated();
        const popdata = await popularApi.getPopular();

        // 응답받은 데이터 기반으로 렌더링할 새로운 배열 생성
        // const newArr = [
        //   { nowPlaying: nowdata },
        //   { topRated: topdata },
        //   { Popular: popdata },
        // ];

        const newArr = [
          {
            kategorieTitle: "now_playing_more",
            movies: nowdata,
          },
          {
            kategorieTitle: "top_rated_more",
            movies: topdata,
          },
          {
            kategorieTitle: "popular_more",
            movies: popdata,
          },
        ];

        // 렌더링 할 데이터 상태 변경
        setDatas(newArr);
      } catch (err) {
        setError(err.message);

        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieData();
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* {datas.map((movieObject) => {
        console.log(movieObject);
        // Object.keys(movieObject) === [nowPlaying, topRated, Popular]
        return Object.keys(movieObject).map((key) => {
          console.log(key);
          console.log(movieObject[key]);
          const movieArr = movieObject[key];

          return <MovieList kategorieTitle={key} state={movieArr}></MovieList>;
        });
      })} */}

      {/* {datas.map((data) => {
        return (
          const { kategoriTitle, movies } = props;
  return (
    <div>
      <h2>{kategoriTitle}</h2>

      <p>
        <Link to={`/kategorie/${kategoriTitle}`}>...more</Link>
      </p>
      <ul>
        {movies.map((item) => {

          return return (
            <li key={items.id}>
              <img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} />
              <h4>{items.title}</h4>
            </li>
          );;
        })}
      </ul>
    </div>
  );
        );
      })} */}

      {datas.map((data) => {
        return (
          <MovieList
            key={data.kategorieTitle}
            kategoriTitle={data.kategorieTitle}
            movies={data.movies}
          ></MovieList>
        );
      })}
    </div>
  );
}
