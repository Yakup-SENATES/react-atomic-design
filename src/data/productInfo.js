import { v4 as uuid } from "uuid";

const productInfo = {
  title: "Fall Limited Edition Sneakers",
  price: "3.299,00",
  description:
    "6,4 inçlik ekranı ve IPS LCD ekran teknolojisi. 1080 x 2340 piksel  ekran çözünürlüğü sayesinde akıllı telefon, tüm görüntüleri oldukça kaliteli ve net bir şekilde sunar.",
  product_hero: "images/image-product-1.jpg",
  images: [
    { path: "images/image-product-1-thumbnail.jpg", id: uuid() },
    { path: "images/image-product-2-thumbnail.jpg", id: uuid() },
    { path: "images/image-product-3-thumbnail.jpg", id: uuid() },
    { path: "images/image-product-4-thumbnail.jpg", id: uuid() },
  ],
};

export default productInfo;
