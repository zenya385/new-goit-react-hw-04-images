import s from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ handleClickLoadMore }) {
  return (
    <button onClick={handleClickLoadMore} type="button" className={s.button}>
      Load more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
