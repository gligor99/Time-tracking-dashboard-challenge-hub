
import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";

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