import React from "react";
//import modalOpen from "./Modal";

const ImageGalleryItem = ({ id, webformatURL, tag, toggleModal }) => {
  //const modalClickHandler = () => {};
  return (
    <li KEY={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tag}
        className="ImageGalleryItem-image"
        onClick={toggleModal}
      />
    </li>
  );
};

export default ImageGalleryItem;
