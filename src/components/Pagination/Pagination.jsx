import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

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

export default Pagination;
