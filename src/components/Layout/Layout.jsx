import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Main } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
