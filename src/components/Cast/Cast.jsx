import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIService from 'services/api-service';

const apiService = new APIService();

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast();
    // eslint-disable-next-line
  }, [movieId]);

  async function getMovieCast() {
    try {
      const response = await apiService.getMovieCast(movieId);
      setMovieCast(response.cast);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ul>
      {movieCast.map(({id, profile_path, name, character}) => (
        <li key={`act${id}`}>
          <img
            src={
              profile_path &&
              `https://image.tmdb.org/t/p/w200/${profile_path}`
            }
            alt={name}
          />
          <h5>{name}</h5>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
