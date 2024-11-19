import MovieKategorie from "../pages/MovieKategorie";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RootLayout from "../RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
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
      // {
      //   path: "/kategorie/now_playing_more",
      //   element: <NowPlayMore />,
      // },
      // {
      //   path: "/kategorie/popular_more",
      //   element: <PopularMore />,
      // },
      // {
      //   path: "/kategorie/top_rated_more",
      //   element: <TopRatedMore />,
      // },
    ],
  },
]);

export default router;
