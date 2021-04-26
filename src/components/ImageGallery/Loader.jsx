import React from "react";
import Loader from "react-loader-spinner";

const Loaders = () => {
  return (
    <div className="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};
export default Loaders;