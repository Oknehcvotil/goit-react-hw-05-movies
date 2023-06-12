import { useLocation } from 'react-router-dom';
import {
  HomeTitle,
  MovieList,
  Link,
  MovieListItem,
} from './MovieGallery.styled';

const MovieGallery = ({ title, movies }) => {
  const location = useLocation();

  console.log(location);

  return (
    <>
      {title && <HomeTitle>{title}</HomeTitle>}
      <MovieList>
        {movies.map(({ id, title, name }) => (
          <MovieListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </MovieListItem>
        ))}
      </MovieList>
    </>
  );
};

export default MovieGallery;
