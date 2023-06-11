import { useEffect, useRef, useState, Suspense } from 'react';
import {
  Outlet,
  useParams,
  NavLink,
  Link,
  useLocation,
} from 'react-router-dom';
import APIService from 'services/api-service';

const apiService = new APIService();

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? 'movies');
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, [movieId]);

  async function getMovie() {
    try {
      const response = await apiService.getMovieDetails(movieId);
      console.log(response);
      setMovie(response);
    } catch (error) {
      console.log(error);
    }
  }

  const { vote_average, genres, poster_path, title, name, overview } = movie;

  const persentageRate = Math.round((vote_average / 10) * 100);

  const movieGenres = genres && genres.map(genre => genre.name).join(', ');

  const imagen =
    poster_path && `https://image.tmdb.org/t/p/w200/${poster_path}`;

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {movie && (
        <div>
          <img src={imagen} alt={title || name} />
          <h2>{title || name}</h2>
          <p>User Score: {persentageRate}%</p>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h4>Genres</h4>
            <p>{movieGenres}</p>
          </div>
        </div>
      )}
      <div>
        <h3>Additional Information</h3>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
