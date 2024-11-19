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
  const [nowPlaying, setNowPlaying] = useState([]);
  const [pupulars, setPupulars] = useState([]);
  const [topRateds, setTopRateds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNowPlay() {
      try {
        const data = await nowPlayingApi.getNowPlaying();
        setNowPlaying(data);
      } catch (err) {
        setError(err.message);

        console.error(err);
        console.log("에러남 ㅠㅠ");
      } finally {
        setLoading(false);
      }
    }

    fetchNowPlay();
  }, []);
  useEffect(() => {
    async function fetchPopular() {
      try {
        const data = await popularApi.getPopular();
        setPupulars(data);
      } catch (err) {
        setError(err.message);

        console.error(err);
        console.log("에러남 ㅠㅠ");
      } finally {
        setLoading(false);
      }
    }

    fetchPopular();
  }, []);

  useEffect(() => {
    async function fetchTopRated() {
      try {
        const data = await topRatedApi.getTopRated();
        setTopRateds(data);
      } catch (err) {
        setError(err.message);

        console.error(err);
        console.log("에러남 ㅠㅠ");
      } finally {
        setLoading(false);
      }
    }

    fetchTopRated();
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <MovieList kategorieTitle="Now Playing" state={nowPlaying} />
      <MovieList kategorieTitle="Popular" state={pupulars} />
      <MovieList kategorieTitle="Top Rated" state={topRateds} />
    </div>
  );
}
