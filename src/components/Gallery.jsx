import React from "react";

export default function Gallery({ productInfo }) {
  return (
    <section className="gallery">
      <img
        className="product-hero"
        src={productInfo.product_hero}
        alt="image product 1"
      />

      <div className="thumb-gallery">
        {productInfo.images.map((image) => {
          return (
            <div className="pic active">
              <img src={`./${image}`} alt="product thumb" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
