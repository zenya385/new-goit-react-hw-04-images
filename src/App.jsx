import { Component } from 'react/cjs/react.production.min';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    serchName: '',
    showModal: false,
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleSearchFormSubmit = serchName => {
    this.setState({ serchName });
  };
  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery />
        <Loader />
        <Button />
        <button type="button" onClick={this.togleModal}>
          открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.togleModal}>
            <h1>ghbdtn tnkjrjynrun vjldo</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              eos minima nisi. Suscipit fugit vitae incidunt nihil, harum
              nesciunt, sit alias enim ex quasi molestias.
            </p>
            <button type="button" onClick={this.togleModal}>
              закрыть
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
