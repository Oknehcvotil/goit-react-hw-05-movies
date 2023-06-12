import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Main } from './Layout.styled';
import Loader from 'components/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};

export default Layout;
