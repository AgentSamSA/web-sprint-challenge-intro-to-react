import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character.js";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [vehicleData, setVehicleData] = useState("");
  const [currentVehicleId, setCurrentVehicleId] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const openDetails = (id) => {
    setCurrentVehicleId(id);
  }

  const closeDetails = () => {
    setCurrentVehicleId(null);
  }

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

  if (!vehicleData) return <h2>Loading...</h2>

  return (
    <StyledApp className="App">
      <h1 className="Header">Vehicles of Episode 2</h1>
      <div>
      {vehicleData.map(vehicleObj => {
        return (
          <div className="Header">
            <h1>{vehicleObj.name} <button onClick={() => openDetails(vehicleObj.url)}>+</button></h1>
          </div>
        )
      }
      )}
        {currentVehicleId && <Character
          key={currentVehicleId.url}
          vehicleId={currentVehicleId}
          vehicle={currentVehicleId}
          close={closeDetails}
        />}
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
