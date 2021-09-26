import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer";
import dummyData from './data.json'

function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)

  const fetchData = async () => {
    const response = await fetch(dummyData)
    const newData = await response.json()
    setData(newData)
    setLoading(false)
  }

  useEffect(()=>{
    fetchData()
  })

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
