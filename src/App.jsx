import { Component } from 'react/cjs/react.production.min';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import { getImg } from 'services/Api';
import Loader from 'components/Loader/Loader';

class App extends Component {
  state = {
    q: '',
    page: 1,
    searchImgs: [],
    imgXL: '',
    showModal: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      getImg(this.state.q, this.state.page)
        .then(searchImgs =>
          this.setState(prev => ({
            searchImgs: [...prev.searchImgs, ...searchImgs],
          }))
        )
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  handleClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleSearchFormSubmit = searchInput => {
    this.setState({ q: searchInput, page: 1, searchImgs: [] });
  };

  handleImageXL = imgXL => {
    this.setState({ imgXL });
    this.toggleModal();
  };
  render() {
    const { showModal, searchImgs, imgXL, isLoading, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && searchImgs.length === 0 && (
          <p style={{ fontSize: '50px', color: 'red' }}>{error}</p>
        )}
        <ImageGallery
          searchImgs={searchImgs}
          handleImageXL={this.handleImageXL}
        />
        {isLoading && <Loader />}

        {searchImgs.length > 0 && (
          <Button handleClickLoadMore={this.handleClickLoadMore} />
        )}

        {showModal && <Modal onClose={this.toggleModal} imgXL={imgXL} />}
      </div>
    );
  }
}

export default App;
