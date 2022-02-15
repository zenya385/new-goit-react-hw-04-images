import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import { getImg } from 'services/Api';
import Loader from 'components/Loader/Loader';

export default function App() {
  const [q, setq] = useState('');
  const [page, setPage] = useState(1);
  const [searchImgs, setSearchImgs] = useState([]);
  const [imgXL, setImgXL] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (q === '') return;

    getImg(q, page)
      .then(searchImgs => setSearchImgs(prev => [...prev, ...searchImgs]))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [q, page]);

  const handleClickLoadMore = () => {
    setPage(page => page + 1);
  };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const handleSearchFormSubmit = searchInput => {
    setq(searchInput);
    setPage(1);
    setSearchImgs([]);
  };

  const handleImageXL = imgXL => {
    setImgXL(imgXL);
    toggleModal();
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      {error && searchImgs.length === 0 && (
        <p style={{ fontSize: '50px', color: 'red' }}>{error}</p>
      )}
      <ImageGallery searchImgs={searchImgs} handleImageXL={handleImageXL} />
      {isLoading && <Loader />}

      {searchImgs.length > 0 && (
        <Button handleClickLoadMore={handleClickLoadMore} />
      )}

      {showModal && <Modal onClose={toggleModal} imgXL={imgXL} />}
    </div>
  );
}

// class App extends Component {
//   state = {
//     q: '',
//     page: 1,
//     searchImgs: [],
//     imgXL: '',
//     showModal: false,
//     isLoading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.q !== this.state.q || prevState.page !== this.state.page) {
//       this.setState({ isLoading: true });
//   getImg(this.state.q, this.state.page)
//     .then(searchImgs =>
//       this.setState(prev => ({
//         searchImgs: [...prev.searchImgs, ...searchImgs],
//       }))
//     )
//     .catch(error => this.setState({ error: error.message }))
//     .finally(() => this.setState({ isLoading: false }));
// }
//   }
//   handleClickLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   handleSearchFormSubmit = searchInput => {
//     this.setState({ q: searchInput, page: 1, searchImgs: [] });
//   };

//   handleImageXL = imgXL => {
//     this.setState({ imgXL });
//     this.toggleModal();
//   };
//   render() {
//     const { showModal, searchImgs, imgXL, isLoading, error } = this.state;
// return (
//   <div>
//     <Searchbar onSubmit={this.handleSearchFormSubmit} />
//     {error && searchImgs.length === 0 && (
//       <p style={{ fontSize: '50px', color: 'red' }}>{error}</p>
//     )}
//     <ImageGallery
//       searchImgs={searchImgs}
//       handleImageXL={this.handleImageXL}
//     />
//     {isLoading && <Loader />}

//     {searchImgs.length > 0 && (
//       <Button handleClickLoadMore={this.handleClickLoadMore} />
//     )}

//     {showModal && <Modal onClose={this.toggleModal} imgXL={imgXL} />}
//   </div>
// );
//   }
// }

// export default App;
