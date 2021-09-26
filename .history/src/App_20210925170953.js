import React from "react";
import "./App.css";
import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer";

function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)

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
