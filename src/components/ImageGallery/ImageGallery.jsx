import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import Buton from "./Button";

const ImageGallery = ({ gallery, onFetchGallery }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {gallery.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem id={id} webformatURL={webformatURL} tag={tags} />
        ))}
        <Buton onFetchGallery={onFetchGallery} />
      </ul>
    </div>
  );
};

export default ImageGallery;
