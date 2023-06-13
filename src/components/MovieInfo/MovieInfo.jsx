import image from '../../images/coming_soon.jpg';
import {
  MoviePageContainer,
  MovieImage,
  MovieDetailsContainer,
  MovieScore,
  MovieOverviewContainer,
  MovieOverviewTitle,
  MovieName,
  MovieGenresTitle,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const { vote_average, genres, poster_path, title, name, overview } = movie;

  const persentageRate = Math.round((vote_average / 10) * 100);

  const movieGenres =
    genres && genres.length >= 1
      ? genres.map(genre => genre.name).join(', ')
      : 'No genres';

  const imagen = poster_path
    ? `https://image.tmdb.org/t/p/w342/${poster_path}`
    : image;

  return (
    <MoviePageContainer>
      <MovieImage src={imagen} alt={title || name} />
      <MovieDetailsContainer>
        <MovieName>{title || name}</MovieName>
        <MovieScore>User Score: {persentageRate}%</MovieScore>
        <MovieOverviewContainer>
          <MovieOverviewTitle>Overview</MovieOverviewTitle>
          <p>{overview ? overview : 'Oooops no overview'}</p>
        </MovieOverviewContainer>
        <div>
          <MovieGenresTitle>Genres</MovieGenresTitle>
          <p>{movieGenres}</p>
        </div>
      </MovieDetailsContainer>
    </MoviePageContainer>
  );
};

export default MovieInfo;
