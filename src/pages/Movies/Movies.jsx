import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import APIService from 'services/api-service';
import MovieGallery from 'components/MovieGallery';

const apiService = new APIService();

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') ?? '';
  console.log(query);

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies(query);
    // eslint-disable-next-line
  }, [query, searchParams, page]);

  const updateQueryString = value => {
    if (value === query) {
      return;
    }

    setPage(1);
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  async function getMovies() {
    if (page === 1) {
      // onLoadMore(false);
      setMovies([]);
    }

    try {
      const response = await apiService.searchMovieByQuery(query, page);
      console.log(response);
      // setMovies(movies => [...movies, ...response]);
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SearchForm value={query} handleSearch={updateQueryString} />
      <MovieGallery movies={movies} />
    </>
  );
};

export default Movies;
