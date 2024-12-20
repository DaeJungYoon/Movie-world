import React from "react";
import { popularApi } from "../api/movieApi";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function PopularMore() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const popdata = await popularApi.getPopular();

        const newArr = [
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
    <>
      {datas.map((data) => {
        const now = data.movies;
        return now.map((item) => {
          return <MovieCard item={item}></MovieCard>;
        });
      })}
    </>
  );
}
