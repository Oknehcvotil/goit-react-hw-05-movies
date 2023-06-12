const MovieInfo = ({ movie }) => {
  const { vote_average, genres, poster_path, title, name, overview } = movie;

    
  const persentageRate = Math.round((vote_average / 10) * 100);

  const movieGenres = genres && genres.map(genre => genre.name).join(', ');

  const imagen =
    poster_path && `https://image.tmdb.org/t/p/w200/${poster_path}`;

  return (
    <div>
      <img src={imagen} alt={title || name} />
      <h2>{title || name}</h2>
      <p>User Score: {persentageRate}%</p>
      <div>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
      <div>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
