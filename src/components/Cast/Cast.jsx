import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIService from 'services/api-service';
import { toast } from 'react-toastify';
import { CastContainer, CastCard, CastImage, CastName } from './Cast.styled';

const apiService = new APIService();
const DEFAULT_PROFILE_URL =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';

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
      if (response.cast.length === 0) {
        toast.info("Ooops, We don't know the cast");
      }
      setMovieCast(response.cast);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }

  return (
    <>
      <CastContainer>
        {movieCast.map(({ id, profile_path, name, character }) => (
          <CastCard key={`act${id}`}>
            <CastImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : DEFAULT_PROFILE_URL
              }
              alt={name}
            />
            <CastName>{name ? name : 'Chuck Norris'}</CastName>
            <p>Character: {character ? character : 'No name'}</p>
          </CastCard>
        ))}
      </CastContainer>
    </>
  );
};

export default Cast;
