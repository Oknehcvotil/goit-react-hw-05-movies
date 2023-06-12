import { LinksCont, LinksTitle, NavLink } from './AdditionalLinks.styled';

const AdditionalLinks = () => {
  return (
    <LinksCont>
      <LinksTitle>Additional Information</LinksTitle>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </LinksCont>
  );
};

export default AdditionalLinks;
