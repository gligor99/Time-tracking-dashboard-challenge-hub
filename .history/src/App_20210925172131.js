import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer";
import dummyData from './data.json'

function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)

  const getData=()=>{
    fetch(dummyData
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }

  

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
