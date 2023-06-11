import { HeaderCont, Nav, NavLink } from "./Header.styled";

const Header = () => {
  return (
    <HeaderCont>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </Nav>
    </HeaderCont>
  );
};

export default Header;
