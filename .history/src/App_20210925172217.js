import React from "react";
import "./App.css";
import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer";
import dummyData from "./data.json";

function App() {
  

  

  return (
    <div className="App">
      <div className="components">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
