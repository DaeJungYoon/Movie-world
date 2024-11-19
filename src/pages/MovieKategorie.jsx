import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import nowPlayingApi from "../api/nowPlayingApi";

export default function MovieKategorie() {
  // const navigate = useNavigate();
  const [nowPlaying, setNowPlaying] = useState([]);
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
              {/* <Link to={`/posts/${id}`} state={{ nowPlay }}>
                <h3>{title}</h3>
              </Link>
              <h3
                onClick={() => {
                  navigate(`/posts/${id}`);
                }}
              >
                {title}
              </h3> */}
              <img src={poster_path} />
              <h4>{title}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
