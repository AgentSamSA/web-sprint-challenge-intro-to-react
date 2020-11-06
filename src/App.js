import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Characters from "./components/Characters.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [vehicleData, setVehicleData] = useState("");
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.dev/api/vehicles/?page=3")
      .then(res => {
        console.log(res.data.results);
        setVehicleData(res.data.results);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Vehicles of Episode 2</h1>
        <Characters vehicleData={vehicleData} />
    </div>
  );
}

export default App;
