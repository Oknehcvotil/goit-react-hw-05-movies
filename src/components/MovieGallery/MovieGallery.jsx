import { MovieList, Link, MovieListItem } from './MovieGallery.styled';

const MovieGallery = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(movie => (
        <MovieListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </MovieListItem>
      ))}
    </MovieList>
  );
};

export default MovieGallery;
