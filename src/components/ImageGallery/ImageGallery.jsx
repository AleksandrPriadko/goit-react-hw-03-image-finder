import React from "react";
import PropTypes from "prop-types";
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
  toggleModalImg,
  srcImg,
  tag,
}) => {
  return (
    <div className="ImageBlock">
      <ul className="ImageGallery">
        <ImageGalleryItem gallerys={gallery} toggleModalImg={toggleModalImg} />
      </ul>
      {isLoader && <Loader />}
      {gallery.length > 0 && <Buton onFetchGallery={onFetchGallery} />}
      {showModals && (
        <Modal srcImgs={srcImg} tags={tag} onClose={toggleModal} />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onFetchGallery: PropTypes.func.isRequired,
  isLoader: PropTypes.bool.isRequired,
  showModals: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleModalImg: PropTypes.func.isRequired,
  srcImg: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
export default ImageGallery;
