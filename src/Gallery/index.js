import React from "react";
import { v4 as uuid } from "uuid";
export default function Gallery({ data }) {
  return (
    <section className="gallery">
      <img
        className="product-hero"
        src={data.productHero}
        alt="image product 1"
      />

      {console.log(data)}
      {data.images.map((image) => {
        console.log(JSON.stringify(image));
      })}

      <div className="thumb-gallery">
        {data.images.map((image) => {
          return (
            <div className="pic" key={uuid()}>
              <img src={`./${image}`} alt="product thumb" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
