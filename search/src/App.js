import React, { Component } from 'react';
import style from './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import Gallery from './components/Gallery/Gallery';
import *as api from './components/services/image-api'

export default class App extends Component {
  state = {
    query: '',
    page: '',
    images: [],
    isLoading: false,
  }

  fetchImageAsyncAwait = async (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    const responce = await api.ImageAxiosApi();
    console.log(responce);
    this.setState({
      images: responce.data.hits,
      isLoading: false,
      page: this.page + 1,
    });
  };


  handleChangeInput = event => {
    const { name, value } = event.target;
    console.log('object', event.target);
    this.setState({
      [name]: value,
    });
  };


  render() {
    const { query, page, images, isLoading } = this.state;
    return (
      <>
        <div className={style.app}>
          <SearchForm
            onSubmit={this.fetchImageAsyncAwait}
            onChange={this.handleChangeInput}
            value={query} />

          <Gallery images={images} />
        </div>
      </>
    )


  }
}

