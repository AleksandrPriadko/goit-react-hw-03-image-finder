import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ApiGallery from "./components/APIGallery/ApiGallery";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";

class App extends Component {
  state = {
    gallery: [],
    searchQuery: "",
    page: 1,
    isLoader: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallery();
    }
    if (!this.state.isLoading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  FormSubmitHandler = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      gallery: [],
      error: null,
    });
  };

  fetchGallery = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoader: true });

    ApiGallery(searchQuery.name, page)
      .then((hits) => {
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  };
  onClickLoad = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    this.fetchGallery();
  };

  render() {
    const { gallery, isLoader } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.FormSubmitHandler} />
        <ImageGallery
          gallery={gallery}
          onFetchGallery={this.fetchGallery}
          isLoader={isLoader}
        />
      </>
    );
  }
}

export default App;
