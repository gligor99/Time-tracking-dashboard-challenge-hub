
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import data from './data.json'

function App() {

  const [data, setData] = useState([])

  return (
    <div className="App">
      <h1>Test</h1>
      <Footer />
    </div>
  );
}

export default App;
