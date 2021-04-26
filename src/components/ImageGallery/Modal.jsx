import React from "react";

const modalWin = ({ largeImageURL, tags }) => {
  return (
    <div className="Overlay">
      <div>
        <img src={largeImageURL} alt={tags} />;
      </div>
    </div>
  );
};

export default modalWin;
