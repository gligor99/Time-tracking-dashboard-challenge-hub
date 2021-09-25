import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import data from "./data.json";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <Footer />
    </div>
  );
}

export default App;