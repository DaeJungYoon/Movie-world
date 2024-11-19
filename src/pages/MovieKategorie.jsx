import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import nowPlayingApi from "../api/nowPlayingApi";
import { nowPlayingApi, popularApi, topRatedApi } from "../api/movieApi";
import { combineSlices } from "@reduxjs/toolkit";

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
      <h2>NowPlay</h2>
      <ul>
        {nowPlaying.map((nowPlay) => {
          const { id, title, poster_path } = nowPlay;
          return (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
              <h4>{title}</h4>
            </li>
          );
        })}
      </ul>
      <h2>Popular</h2>
      <ul>
        {pupulars.map((pupular) => {
          const { id, title, poster_path } = pupular;
          return (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
              <h4>{title}</h4>
            </li>
          );
        })}
      </ul>
      <h2>Top Rated</h2>
      <ul>
        {topRateds.map((topRated) => {
          const { id, title, poster_path } = topRated;
          return (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
              <h4>{title}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
