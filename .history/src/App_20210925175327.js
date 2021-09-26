import React from "react";
import "./App.css";
import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer";

const buttons = [
  {
    name: "Daily",
    value: "daily",
  },
  {
    name: "Weekly",
    value: "weekly",
  },
  {
    name: "Monthly",
    value: "monthly",
  },
];

function App() {
  return (
    <div className="App">
      <div className="components">
        <Card buttons={buttons} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
