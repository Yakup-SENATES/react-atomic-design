import Container from "./pages/Container";
import React from "react";
import "./styles/style.scss";
import productInfo from "./data/productInfo";

function App() {
  return (
    <div className="App">
      <Container productInfo={productInfo} />
    </div>
  );
}

export default App;
