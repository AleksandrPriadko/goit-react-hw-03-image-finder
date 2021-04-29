import React, { Component } from "react";
import PropTypes from "prop-types";

class Buton extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Обнавление");
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    const { onFetchGallery } = this.props;
    return (
      <button type="submit" className="Button" onClick={onFetchGallery}>
        Load more
      </button>
    );
  }
}

Buton.propTypes = {
  onFetchGallery: PropTypes.func.isRequired,
};
export default Buton;
