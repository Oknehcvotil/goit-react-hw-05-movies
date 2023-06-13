import MovieCard from 'components/MovieCard';
import { HomeTitle, MovieList } from './MovieGallery.styled';

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

export default MovieGallery;
