import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import APIService from 'services/api-service';
import MovieGallery from 'components/MovieGallery';
import Loader from 'components/Loader';
import { toast } from 'react-toastify';
import Pagination from 'components/Pagination';

const apiService = new APIService();

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('query') ?? '';

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
    // const nextParams = value !== '' ? { query: value, page } : {};
    setSearchParams(nextParams);
  };

  async function getMovies() {
    setIsLoading(true);

    if (page === 1) {
      setMovies([]);
    }

    try {
      const response = await apiService.searchMovieByQuery(query, page);

      if (response.total_results === 0) {
        toast.error(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
        return;
      }

      setTotalPages(response.total_pages);

      setMovies(response.results);
    } catch (error) {
      toast.error(`${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  const handlePageChange = e => {
    setPage(e.selected + 1);

    // setSearchParams({ query, page });
  };

  return (
    <>
      <SearchForm value={query} handleSearch={updateQueryString} />
      <MovieGallery movies={movies} />
      {totalPages > 1 && (
        <Pagination pages={totalPages} onChange={handlePageChange} />
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
