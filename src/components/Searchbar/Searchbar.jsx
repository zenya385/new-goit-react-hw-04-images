import { useState } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [searchImgs, setSearchImgs] = useState('');

  const handleNameChange = e => {
    setSearchImgs(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchImgs.trim() === '') {
      alert('введите имя');
      return;
    }
    onSubmit(searchImgs);
    setSearchImgs('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchForm_button}>
          <span className={s.searchForm_button_label}>Search</span>
        </button>

        <input
          className={s.searchForm_input}
          name="searchImgs"
          value={searchImgs}
          onChange={handleNameChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
