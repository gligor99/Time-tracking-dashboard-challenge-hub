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
  }, [])

  const {title, color, imgSrc, timeframes} = data[value]

  return (
    <div className="App">
      <div className="components">
        <h1>{title}</h1>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
