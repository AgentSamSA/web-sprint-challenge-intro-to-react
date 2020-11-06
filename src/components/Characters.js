import React, { useState } from "react";
import Character from "./Character.js";
import styled from "styled-components";

export default function Characters(props) {
    const { vehicleData} = props;
    const [currentVehicleId, setCurrentVehicleId] = useState(null);

    if (!props.vehicleData) return <h2>Loading...</h2>

    const openDetails = (id) => {
        setCurrentVehicleId(id);
    }

    const closeDetails = () => {
        setCurrentVehicleId(null);
    }


    return (
        <StyledCharacterHolder>
            {vehicleData.map(vehicleObj => {
                return (
                    <div>
                        <div className="Header">
                            <h1>{vehicleObj.name} <button>+</button></h1>
                        </div>
                        <Character
                            key={vehicleObj.url}
                            vehicleId={currentVehicleId}
                            vehicle={vehicleObj}
                            close={closeDetails}
                        />
                    </div>
                )
            })}
        </StyledCharacterHolder>
    )
}

const StyledCharacterHolder = styled.div`
`;