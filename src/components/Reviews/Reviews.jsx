import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIService from 'services/api-service';
import { toast } from 'react-toastify';

const apiService = new APIService();

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews();
    // eslint-disable-next-line
  }, [movieId]);

  async function getMovieReviews() {
    try {
      const response = await apiService.getMovieReviews(movieId);
      console.log(response.results);
      setMovieReviews(response.results);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }

  return (
    <ul>
      {movieReviews.map(({id, author, content})=> (
        <li key={id}>
          <h5>Author: {author}</h5>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
