import { useLocation } from 'react-router-dom';
import { MovieList, Link, MovieListItem } from './MovieGallery.styled';

const MovieGallery = ({ movies }) => {
  const location = useLocation();
  console.log(location);

  return (
    <MovieList>
      {movies.map(({ id, title, name }) => (
        <MovieListItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title || name}
          </Link>
        </MovieListItem>
      ))}
    </MovieList>
  );
};

export default MovieGallery;
