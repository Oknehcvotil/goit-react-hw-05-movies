import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist/umd/react-router-dom.development';

const MovieDetails = () => {
  const params = useParams();
  return (
    <>
      <div>movie</div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
