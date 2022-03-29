import React from "react";
import "./styles/style.scss";
import productInfo from "./Data/productInfo";
import Container from "./Containers";
function App() {
  return (
    <div className="App">
      <Container productInfo={productInfo} />
    </div>
  );
}

export default App;
