import React from "react";

import { Flightlist } from "../store/flightsdetails";
import { useContext } from "react";
import FlightList from "./Flights/FlightList";
import Form from "./Form";

export default function AllFlight() {
  const { bflight, oflight, input, setSelectedFlightIndex,loading } =
    useContext(Flightlist);
  return (
    <>
      <Form />
      <div className="w-full flex ">
       { loading ? <h2 className="m-auto text-4xl text-pink-600 font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl ">
          Best Flight for {input.arival} to {input.departure}
        </h2>: ""}
      </div>
      {bflight.map((option, index) => (
        <FlightList
          key={index}
          flighstData={option}
          input={input}
          setSelectedFlightIndex={setSelectedFlightIndex}
        />
      
      ))}
      <div className="w-full flex ">
        {loading?<h2 className="m-auto text-4xl text-pink-600 font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl ">
          Regulare Flight for {input.arival} to {input.departure}
        </h2>:""}
      </div>

      {oflight.map((option, index) => (
        <FlightList
          key={index}
          flighstData={option}
          input={input}
          setSelectedFlightIndex={setSelectedFlightIndex}
        />
      ))}
    </>
  );
}
