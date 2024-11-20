import React, { useEffect, useState } from "react";
import { topRatedApi } from "../api/movieApi";
import MovieCard from "../components/MovieCard";

export default function TopRatedMore() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        // 데이터 요청 3번
        const topdata = await topRatedApi.getTopRated();

        const newArr = [
          {
            kategorieTitle: "top_rated_more",
            movies: topdata,
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
      ;
    </>
  );
}
