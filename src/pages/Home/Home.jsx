import APIService from 'services/api-service';
import MovieGallery from 'components/MovieGallery';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import { toast } from 'react-toastify';

const apiService = new APIService();

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTrends();
    // eslint-disable-next-line
  }, []);

  async function getTrends() {
    try {
      setIsLoading(true);
      const response = await apiService.getTrends();
      setMovies(response);
    } catch (error) {
      toast.error(`${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <MovieGallery title={'Trending today'} movies={movies} />
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
