import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

// const Home = lazy(() => import("../pages/Home"));
// const Movies = lazy(() => import("../pages/Movies"));
// const MovieDetails = lazy(() => import("../pages/MovieDetails"));
// const Cast = lazy(() => import("./Cast"));
// const Reviews = lazy(() => import("./Reviews"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
