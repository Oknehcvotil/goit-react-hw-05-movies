import APIService from 'services/api-service';
import MovieGallery from 'components/MovieGallery';
import { useEffect, useState } from 'react';
import { HomeTitle } from './Home.styled';

const apiService = new APIService();

const Home = () => {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    getTrends();
    // eslint-disable-next-line
  }, []);

  async function getTrends() {
    try {
      const response = await apiService.getTrends();
      console.log(response);
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      <MovieGallery movies={movies} />
    </>
  );
};

export default Home;
