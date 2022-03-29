import React from "react";
import Content from "../components/Content";

const Container = ({ productInfo }) => {
  return (
    <div className="container">
      <Content productInfo={productInfo} />
    </div>
  );
};
export default Container;
