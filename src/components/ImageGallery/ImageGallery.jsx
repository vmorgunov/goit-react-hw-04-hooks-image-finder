import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ImageGalleryList>
      {images &&
        images.map(({ id, webformatURL, tags, largeImageURL }) => {
          const selectImage = () => onSelect(largeImageURL);
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tag={tags}
              onSelect={selectImage}
            />
          );
        })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
};

export default ImageGallery;
