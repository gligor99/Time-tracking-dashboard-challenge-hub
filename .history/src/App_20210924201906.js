import React from "react";
import "./App.css";
import ProfileCard from "./components/Cards/ProfileCard/ProfileCard";
import SingleCard from "./components/Cards/SingleCard/SingleCard";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <div className="App">
      <h1>Test</h1>
      <ProfileCard />
      <SingleCard />
      <Footer />
    </div>
  );
}

export default App;
