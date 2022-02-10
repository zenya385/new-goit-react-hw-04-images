import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ imgS, imgXL, handleImageXL }) {
  return (
    <li className={s.ImageGalleryItem} onClick={() => handleImageXL(imgXL)}>
      <img src={imgS} alt="" className={s.ImageGalleryItem_image}></img>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  imgS: PropTypes.string.isRequired,
  imgXL: PropTypes.string.isRequired,
  handleImageXL: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
