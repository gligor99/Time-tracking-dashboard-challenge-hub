
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {

  const [data, setData] = useState([])

  const fetchData = async () => {
    await fetch('data.json')
    .then((response) => response.json())
.then((findresponse)=> {
  setData({
    data:findresponse
  })
  }

  return (
    <div className="App">
      <h1>Test</h1>
      <Footer />
    </div>
  );
}

export default App;
