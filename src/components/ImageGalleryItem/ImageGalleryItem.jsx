import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ imgS, imgXL, handleImageXL }) {
  return (
    <li className={s.ImageGalleryItem} onClick={() => handleImageXL(imgXL)}>
      <img src={imgS} alt="" className={s.ImageGalleryItem_image}></img>
    </li>
  );
}

export default ImageGalleryItem;
