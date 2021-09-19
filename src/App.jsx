import React, { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Button from 'components/Button/Button';
import Spinner from 'components/Loader/Loader';
import fetchImages from 'service/ApiService';
import { AppContainer } from 'App.styled';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    fetchImages(query, page)
      .then(data => {
        if (data.hits.length === 0) {
          toast.error(`Ooops, no match found.`);
          return;
        }

        setImages(prevState => [...prevState, ...data.hits]);
      })
      .then(() => {
        if (page > 1) {
          handleScroll();
        }
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleSelectedImage = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const handleModalClose = () => {
    setSelectedImage('');
  };

  const handleBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  const showLoadButton = images.length > 0;
  return (
    <AppContainer>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Spinner />}
      <ImageGallery images={images} onSelect={handleSelectedImage} />
      {selectedImage && (
        <Modal src={selectedImage} onClose={handleModalClose} />
      )}
      {showLoadButton && (
        <Button title="Load more" handleBtnClick={handleBtnClick}></Button>
      )}

      <ToastContainer autoClose={3000} />
    </AppContainer>
  );
}
