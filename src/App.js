import React, { useState, useEffect } from "react";
import "./styles/style.scss";
import Container from "./Containers";
import api from "./Data/products";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get("/products/125");
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //const getProducts = () => {
  //  axios.get("http://localhost:8080/api/products").then((res) => {
  //    setData(res.data);
  //  });
  //};
  return (
    <div className="App">
      {data.map((product) => (
        <Container key={product.id} data={product} />
      ))}
      {/*<Container data={data} productInfo={productInfo} />*/}
    </div>
  );
}

export default App;
