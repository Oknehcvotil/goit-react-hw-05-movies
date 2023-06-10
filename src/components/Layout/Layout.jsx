import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
