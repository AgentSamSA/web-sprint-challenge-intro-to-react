// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Character(props) {
    const { vehicleId, close } = props;
    const [vehicleDetails, setVehicleDetails] = useState(null);

    useEffect(() => {
        axios
            .get(vehicleId)
            .then(res => {
                setVehicleDetails(res.data);
            })
            .catch(err => {
                debugger;
            });
    }, [vehicleId])

    return (
        <StyledCharacter>
            {vehicleDetails &&
                <div>
                    <h2>Model: {vehicleDetails.model}</h2>

                    <p>Manufacturer: {vehicleDetails.manufacturer}</p>

                    <p>Length: {vehicleDetails.length}</p>

                    <p>Max Speed in Atmosphere: {vehicleDetails.max_atmosphering_speed}</p>

                    <p>Crew and Passengers: {vehicleDetails.crew} crew and {vehicleDetails.passengers} {vehicleDetails.passengers === 1 ? "passenger" : "passengers"}</p>

                    <button onClick={close}>Close</button>
                </div>
            }
        </StyledCharacter>
    );
}

const StyledCharacter = styled.div`
    background-color: tan;
    border: 5px solid white;

    .Header {
        display: flex;
        justify-content: space-around;
    }
`;