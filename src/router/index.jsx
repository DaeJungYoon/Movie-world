import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MovieKategorie from "../pages/MovieKategorie";
import RootLayout from "../RootLayout";
import NowPlayMore from "../pages/NowPlayMore";
import PopularMore from "../pages/PopularMore";
import TopRatedMore from "../pages/TopRatedMore";
import MovieDetail from "../pages/movieDetail";
import HomeLayout from "../HomeLayout";
import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/movie/:movieDetailId",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <MovieDetail></MovieDetail>,
      },
    ],
  },
  {
    path: "/search",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/search/:inputKeyword",
      },
    ],
  },
  {
    path: "/kategorie",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MovieKategorie />,
      },
      {
        path: "/kategorie/now_playing_more",
        element: <NowPlayMore />,
      },
      {
        path: "/kategorie/popular_more",
        element: <PopularMore />,
      },
      {
        path: "/kategorie/top_rated_more",
        element: <TopRatedMore />,
      },
    ],
  },
]);

export default router;
