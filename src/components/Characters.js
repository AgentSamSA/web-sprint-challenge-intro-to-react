import React from "react";
import Character from "./Character.js";

export default function Characters(props) {
    const { vehicleData } = props;

    if (!props.vehicleData) return <h2>Loading...</h2>

    return (
        <div>
            {vehicleData.map(vehicleObj => {
                return (
                    <Character
                        key={vehicleObj.url}
                        vehicle={vehicleObj}
                    />
                )
            })}
        </div>
    )
}