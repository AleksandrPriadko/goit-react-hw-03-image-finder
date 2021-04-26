import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "./Modal";
import Loader from "./Loader";
import Buton from "./Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ImageGallery = ({
  gallery,
  onFetchGallery,
  isLoader,
  showModals,
  toggleModal,
}) => {
  return (
    <div className="ImageBlock">
      <ul className="ImageGallery">
        {gallery.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            tag={tags}
            toggleModal={toggleModal}
          />
        ))}
      </ul>
      {isLoader && <Loader />}
      {gallery.length > 0 && (
        <Buton onFetchGallery={onFetchGallery} gallery={gallery} />
      )}
      {showModals &&
        gallery.map(({ largeImageURL, tags }) => (
          <Modal largeImageURL={largeImageURL} tags={tags} />
        ))}
    </div>
  );
};

export default ImageGallery;
