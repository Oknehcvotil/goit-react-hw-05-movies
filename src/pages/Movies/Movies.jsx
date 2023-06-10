import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm';
import APIService from 'services/api-service';
import MovieGallery from 'components/MovieGallery';

const apiService = new APIService();

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = value => {
    if (value === searchValue) {
      return;
    }

    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    getMovies();
    // eslint-disable-next-line
  }, [searchValue]);

  async function getMovies() {
    try {
      const response = await apiService.searchMovieByQuery(searchValue);
      console.log(response);
      setMovies(movies => [...movies, ...response]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      <MovieGallery movies={movies} />
    </>
  );
};

export default Movies;
