import React, { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchImgs: '',
  };

  handleNameChange = e => {
    this.setState({ searchImgs: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchImgs.trim() === '') {
      alert('введите имя');
      return;
    }
    this.props.onSubmit(this.state.searchImgs);
    this.setState({ searchImgs: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchForm_button}>
            <span className={s.searchForm_button_label}>Search</span>
          </button>

          <input
            className={s.searchForm_input}
            name="searchImgs"
            value={this.state.searchImgs}
            onChange={this.handleNameChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
