import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

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

export default ImageGallery;
