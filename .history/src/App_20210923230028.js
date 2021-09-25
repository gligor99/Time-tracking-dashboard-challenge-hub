import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import dummyData from "./data.json";

function App() {

  return (
    <div className="App">
      <h1>Test</h1>
      {dummyData.map((data) => {
        return (
          <h1>{data.title}</h1>
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
