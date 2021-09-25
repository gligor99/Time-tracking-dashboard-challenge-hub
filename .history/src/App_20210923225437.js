import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import data from "./data.json";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  useEffect(()=>{
    getData()
  })

  return (
    <div className="App">
      <h1>Test</h1>
      <Footer />
    </div>
  );
}

export default App;
