import React from "react";

const Info = ({ data }) => {
  return (
    <section className="product">
      <div className="title">{data.title}</div>

      <div className="description">
        <span className="fiyat">{data.price} TL</span>
        <br />
        <span className="taksit">3 Taksit X 1.112,00TL . </span>
        <span className="tümTaksitler"> Tüm Taksitler</span>
      </div>

      <div className="count-btn-group">
        <div className="btn-1">
          <p>Hemen Al</p>
        </div>
        <div className="btn">
          <p>Sepete Ekle</p>
        </div>
      </div>

      <div className="info">
        <p>{data.description}</p>
      </div>
    </section>
  );
};
export default Info;
