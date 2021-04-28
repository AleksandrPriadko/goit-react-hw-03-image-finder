import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ApiGallery from "./components/APIGallery/ApiGallery";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";

//import ImageGalleryItem from "./components/ImageGalleryItem";

class App extends Component {
  state = {
    gallery: [],
    searchQuery: "",
    page: 1,
    largeImg: "",
    alt: "",
    isLoader: false,
    showModals: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallery();
    }
  }

  FormSubmitHandler = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      gallery: [],
      error: null,
    });
    console.log(query);
  };

  fetchGallery = () => {
    const { searchQuery, page } = this.state;
    console.log(searchQuery.name);
    this.setState({ isLoader: true });
    ApiGallery(searchQuery.name, page)
      .then((hits) => {
        console.log(hits);
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  };

  toggleModal = () => {
    this.setState(({ showModals }) => ({
      showModals: !showModals,
    }));
  };

  toggleModalImg = (gallery) => {
    console.log(gallery.largeImageURL);
    this.setState({
      largeImg: gallery.largeImageURL,
      alt: gallery.tags,
    });
    this.toggleModal();
  };
  render() {
    const { gallery, isLoader, showModals, largeImg, alt } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.FormSubmitHandler} />
        <ImageGallery
          gallery={gallery}
          onFetchGallery={this.fetchGallery}
          isLoader={isLoader}
          showModals={showModals}
          toggleModal={this.toggleModal}
          toggleModalImg={this.toggleModalImg}
          srcImg={largeImg}
          tag={alt}
        />
      </>
    );
  }
}

export default App;
