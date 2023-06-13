import { Link, MovieListItem, Img, MovieName } from './MovieCard.styled';
import { useLocation } from 'react-router-dom';
import image from '../../images/coming_soon.jpg';
import PropTypes from 'prop-types';

const MovieCard = ({ id, title, name, poster_path }) => {
  const location = useLocation();

  return (
    <MovieListItem>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : image
          }
          alt={title || name}
        />
        <MovieName>{title || name}</MovieName>
      </Link>
    </MovieListItem>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
};

export default MovieCard;
