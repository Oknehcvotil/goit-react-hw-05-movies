import MovieCard from 'components/MovieCard';
import { HomeTitle, MovieList } from './MovieGallery.styled';
import PropTypes from 'prop-types';

const MovieGallery = ({ title, movies }) => {
  return (
    <>
      {title && <HomeTitle>{title}</HomeTitle>}
      <MovieList>
        {movies.map(({ id, title, name, poster_path }) => (
          <MovieCard
            key={id}
            id={id}
            title={title}
            name={name}
            poster_path={poster_path}
          />
        ))}
      </MovieList>
    </>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default MovieGallery;
