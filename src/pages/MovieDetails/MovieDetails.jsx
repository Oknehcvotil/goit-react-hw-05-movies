import { Outlet } from 'react-router-dom/dist/umd/react-router-dom.development';

const MovieDetails = () => {
  return (
    <>
      <div>movie</div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
