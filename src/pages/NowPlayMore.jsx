import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { nowPlayingApi } from "../api/movieApi";

export default function NowPlayMore() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const nowdata = await nowPlayingApi.getNowPlaying();

        const newArr = [
          {
            kategorieTitle: "now_playing_more",
            movies: nowdata,
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
    <>
      {datas.map((data) => {
        const now = data.movies;
        return now.map((item) => {
          return <MovieCard key={item.id} item={item}></MovieCard>;
        });
      })}
      ;
    </>
  );
}
