import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';
import PropTypes from 'prop-types';

const Pagination = ({ pages, onChange }) => {
  return (
    <ReactPaginate
      pageCount={pages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={onChange}
      containerClassName={styles.pagination}
      pageClassName={styles['page-item']}
      pageLinkClassName={styles['page-link']}
      activeClassName={styles.active}
      previousClassName={styles['page-item']}
      nextClassName={styles['page-item']}
      previousLinkClassName={styles['page-link']}
      nextLinkClassName={styles['page-link']}
    />
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
