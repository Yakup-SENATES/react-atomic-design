import React from "react";
import Content from "../Content/index";

const Container = ({ data }) => {
  return (
    <div className="container">
      <Content data={data} />
    </div>
  );
};
export default Container;
