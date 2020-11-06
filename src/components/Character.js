// Write your Character component here
import React from "react";

export default function Character(props) {
    const { vehicle } = props;

    return (
        <div>
            <h1>{vehicle.name}</h1>

            <h2>Model: {vehicle.model}</h2>

            <p>Manufacturer: {vehicle.manufacturer}</p>

            <p>Length: {vehicle.length}</p>

            <p>Max Speed in Atmosphere: {vehicle.max_atmosphering_speed}</p>

            <p>Crew and Passengers: {vehicle.crew} crew and {vehicle.passengers} {vehicle.passengers === 1 ? "passenger" : "passengers"}</p>

        </div>
    );
}