import React, { useEffect, useState } from "react";
import { detailApi } from "../api/movieApi";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { movieDetailId } = useParams();
  const [movie, setMovie] = useState();
  const [movieReview, setMovieReview] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await detailApi.getDetail(movieDetailId);
        setMovie(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    async function fetchMovieReview() {
      try {
        const data = await detailApi.getDetailReview(movieDetailId);
        for (let i in data) {
          setMovieReview(data[i]);
        }
        console.log(movieReview);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
    fetchMovieReview();
  }, []);
  if (loading) return <div>...Loading...</div>;
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <ul>
        <li>
          <h3>제목: {movie.title}</h3>
        </li>
        <li>
          <p>줄거리: {movie.overview}</p>
        </li>
        <li>
          <p>상영시간: {movie.runtime}</p>
        </li>
        <li>
          <p>개봉일: {movie.release_date}</p>
        </li>
        <li>
          <p>평점: {movie.vote_average}</p>
        </li>
        <li>
          <p>투표수: {movie.vote_count}</p>
        </li>
      </ul>
      <h4>리뷰</h4>
      <ul>
        <li>닉네임: {movieReview.author}</li>
        <li>{movieReview.content}</li>
      </ul>
    </>
  );
}
