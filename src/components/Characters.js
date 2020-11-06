import React from "react";
import Character from "./Character.js";

export default function Characters(props) {
    const { vehicleData } = props;

    return (
        <div>
            {vehicleData.map(vehicle => {
                return (
                    <Character
                        key={vehicle.url}
                        vehicleDetails={vehicle}
                    />
                )
            })}
        </div>
    )
}