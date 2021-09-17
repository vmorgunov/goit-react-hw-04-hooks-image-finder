import React from 'react';
import PropTypes from 'prop-types';

import { ImageGallery, ImageGalleryItemValue } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, alt, onSelect }) => (
  <ImageGalleryItemValue>
    <ImageGallery src={webformatURL} alt={alt} onClick={onSelect} />
  </ImageGalleryItemValue>
);
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
  onSelect: PropTypes.func,
};
export default ImageGalleryItem;
