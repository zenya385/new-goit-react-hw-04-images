import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ searchImgs, handleImageXL }) {
  return (
    <ul className={s.ImageGallery}>
      {searchImgs.map(img => (
        <ImageGalleryItem
          key={img.webformatURL}
          imgS={img.webformatURL}
          imgXL={img.largeImageURL}
          handleImageXL={handleImageXL}
        />
      ))}
    </ul>
  );
}

ImageGalleryItem.propTypes = {
  searchImgs: PropTypes.array,
  handleImageXL: PropTypes.func.isRequired,
};
export default ImageGallery;
