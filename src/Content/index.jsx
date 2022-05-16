import React from "react";
import Gallery from "../Gallery";
import Info from "../Info";

const Content = ({ data }) => {
  return (
    <div className="content">
      <Gallery data={data} />
      <Info data={data} />
    </div>
  );
};

export default Content;
