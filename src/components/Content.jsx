import React from "react";
import Gallery from "./Gallery";
import Info from "./Info";

const Content = ({ productInfo }) => {
  return (
    <div className="content">
      <Gallery productInfo={productInfo} />
      <Info productInfo={productInfo} />
    </div>
  );
};

export default Content;
