import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIService from 'services/api-service';
import { toast } from 'react-toastify';
import { ReviewsItem, ReviewsAuthor } from './Reviews.styled';

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

      if (response.results.length === 0) {
        toast.info("We don't have any reviews for this movie");
      }
      setMovieReviews(response.results);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }

  return (
    <ul>
      {movieReviews.map(({ id, author, content }) => (
        <ReviewsItem key={id}>
          <ReviewsAuthor>Author: {author}</ReviewsAuthor>
          <p>{content}</p>
        </ReviewsItem>
      ))}
    </ul>
  );
};

export default Reviews;
