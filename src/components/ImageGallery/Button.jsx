import React from "react";

const Buton = ({ onFetchGallery }) => {
  return (
    <button type="submit" className="Button" onClick={onFetchGallery}>
      Load more
    </button>
  );
};

export default Buton;
