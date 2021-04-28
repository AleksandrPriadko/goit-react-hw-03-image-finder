import React from "react";
import PropTypes from "prop-types";

const Buton = ({ onFetchGallery }) => {
  return (
    <button type="submit" className="Button" onClick={onFetchGallery}>
      Load more
    </button>
  );
};

Buton.propTypes = {
  onFetchGallery: PropTypes.func.isRequired,
};
export default Buton;
