import { Link } from './BackBtn.styled';
import PropTypes from 'prop-types';

const BackBtn = ({ backLink }) => {
  return <Link to={backLink}>Go back</Link>;
};

export default BackBtn;

BackBtn.propTypes = {
  backLink: PropTypes.object.isRequired,
};
