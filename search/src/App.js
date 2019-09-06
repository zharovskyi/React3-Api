import React, { Component } from 'react';
import style from './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import Gallery from './components/Gallery/Gallery';
import *as api from './components/services/image-api';
import axios from 'axios';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';


export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    isOpen: false,
    largeImageUrl: '',
  }

  componentDidMount() {
    axios
      .get('https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=4&key=13241537-06d8871706b8937518ecf25ca')
      .then(response =>
        this.setState({ images: response.data.hits }),
    );
  }

  fetchImageAsyncAwait = async (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    const { page, query } = this.state;
    const responce = await api.ImageAxiosApi(query, page);
    this.setState({
      images: responce.data.hits,
      isLoading: false,
      page: page + 1,
    });
  };

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleClickLoadMore = async (event) => {
    const { page, query } = this.state;
    const responce = await api.ImageAxiosApi(query, page);
    this.setState(prevState => ({
      images: [...prevState.images, ...responce.data.hits],
      isLoading: false,
    }))

  }
  // open modal
  handleOpenModal = largeImageUrl => {
    this.setState({
      isOpen: true,
      largeImageUrl,
    })
  }
  // close modal
  handleCloseModal = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { query, images, isLoading, isOpen, largeImageUrl } = this.state;
    return (
      <>
        <div className={style.app}>
          <SearchForm
            onSubmit={this.fetchImageAsyncAwait}
            onChange={this.handleChangeInput}
            value={query} />

          {isLoading ? <Loader /> : <Gallery
            images={images}
            openModal={this.handleOpenModal}
            onClick={this.handleClickLoadMore} />}
          {isOpen && <Modal
            largeImageUrl={largeImageUrl}
            handleCloseModal={this.handleCloseModal} />}
        </div>
      </>
    )
  }
}

