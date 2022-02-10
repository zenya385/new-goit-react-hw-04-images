import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';

// https://pixabay.com/api/?q=${query}&page=${page}&key=22610819-610095abdb962b7788008b666&image_type=photo&orientation=horizontal&per_page=12

class App extends Component {
  state = {
    q: '',
    page: 1,
    searchImgs: [],
    imgXL: '',
    showModal: false,
    isLOading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q) {
      axios
        .get(
          `https://pixabay.com/api/?key=23313503-fe93316d6899b77e3854f09dc&q=${this.state.q}&image_type=photo&per_page=12&orientation&page=page=${this.state.page}`
        )
        .then(res => this.setState({ searchImgs: res.data.hits }))
        .catch(err => console.log(err));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleSearchFormSubmit = searchInput => {
    this.setState({ q: searchInput });
  };

  handleImageXL = imgXL => {
    this.setState({ imgXL });
    this.toggleModal();
  };
  render() {
    const { showModal, searchImgs, imgXL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery
          searchImgs={searchImgs}
          handleImageXL={this.handleImageXL}
        />
        <Loader />
        <Button />
        {/* <button type="button" onClick={this.togleModal}>
          открыть модалку
        </button> */}
        {showModal && <Modal onClose={this.toggleModal} imgXL={imgXL} />}
      </div>
    );
  }
}

export default App;
