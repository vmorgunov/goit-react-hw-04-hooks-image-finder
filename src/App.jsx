import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Button from 'components/Button/Button';
import Spinner from 'components/Loader/Loader';
import fetchImage from 'service/ApiService';
import { AppContainer } from 'App.styled';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    selectedImage: '',
    isLoading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevQuery !== newQuery || prevPage !== newPage) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { page, searchQuery } = this.state;
    if (searchQuery !== undefined) {
      this.setState({ isLoading: true });

      fetchImage(searchQuery, page)
        .then(data => {
          if (data.hits.length === 0) {
            toast.error(`Ooops, no match found.`);
            return;
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }));
        })
        .catch(error => console.log(error.message))
        .finally(() => {
          this.setState({ isLoading: false });
          this.handleScroll();
        });
    }
  };

  handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery: searchQuery, images: [], page: 1 });
  };

  handleSelectedImage = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };

  handleModalClose = () => {
    this.setState({ selectedImage: '' });
  };

  handleBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { selectedImage, isLoading, images } = this.state;
    const showLoadButton = images.length > 0;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Spinner />}
        <ImageGallery images={images} onSelect={this.handleSelectedImage} />
        {selectedImage && (
          <Modal src={selectedImage} onClose={this.handleModalClose} />
        )}
        {showLoadButton && (
          <Button
            title="Load more"
            handleBtnClick={this.handleBtnClick}
          ></Button>
        )}

        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
