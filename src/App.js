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
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallery();
    }
  }

  FormSubmitHandler = (query) => {
    this.setState({ searchQuery: query, page: 1, gallery: [] });
    console.log(query);
  };

  fetchGallery = () => {
    const { searchQuery, page } = this.state;
    console.log(searchQuery.name);
    ApiGallery(searchQuery.name, page)
      .then((hits) => {
        console.log(hits);
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { gallery } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.FormSubmitHandler} />
        <ImageGallery gallery={gallery} onFetchGallery={this.fetchGallery} />
      </>
    );
  }
}

export default App;
