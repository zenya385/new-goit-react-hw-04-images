import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {};
  render() {
    return (
      <>
        <ul className="gallery">
          <ImageGalleryItem />
        </ul>
      </>
    );
  }
}

export default ImageGallery;
