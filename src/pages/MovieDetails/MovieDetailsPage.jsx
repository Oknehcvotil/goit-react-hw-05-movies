import Loader from 'components/Loader';
import { useEffect, useRef, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import APIService from 'services/api-service';
import { toast } from 'react-toastify';
import BackBtn from 'components/BackBtn';
import MovieInfo from 'components/MovieInfo';
import AdditionalLinks from 'components/AdditionalLinks';

const apiService = new APIService();

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? 'movies');
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, [movieId]);

  async function getMovie() {
    try {
      setIsLoading(true);

      const response = await apiService.getMovieDetails(movieId);

      setMovie(response);
    } catch (error) {
      toast.error(`${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <BackBtn backLink={backLinkLocationRef.current} />
      {movie && <MovieInfo movie={movie} />}
      <AdditionalLinks />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
