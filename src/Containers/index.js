import React from "react";
import Content from "../Content/index";

const Container = ({ productInfo }) => {
  return (
    <div className="container">
      <Content productInfo={productInfo} />
    </div>
  );
};
export default Container;
