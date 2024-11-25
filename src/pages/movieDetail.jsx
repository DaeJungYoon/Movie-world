import React, { useEffect, useState } from "react";
import { detailApi } from "../api/movieApi";
import { useParams } from "react-router-dom";

export default function movieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await detailApi.getDetail(movieId);
        setMovie(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </>
  );
}
