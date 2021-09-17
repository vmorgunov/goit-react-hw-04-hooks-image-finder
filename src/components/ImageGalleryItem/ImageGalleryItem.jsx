import React from 'react';
import PropTypes from 'prop-types';

import { Image, Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tag, onSelect }) => (
  <Item>
    <Image src={webformatURL} alt={tag} onClick={onSelect} />
  </Item>
);
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
  onSelect: PropTypes.func,
};
export default ImageGalleryItem;
