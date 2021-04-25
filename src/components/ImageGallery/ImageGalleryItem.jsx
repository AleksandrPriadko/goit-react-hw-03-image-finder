import React from "react";

const ImageGalleryItem = ({ id, webformatURL, tag }) => {
  return (
    <li KEY={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={tag} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
