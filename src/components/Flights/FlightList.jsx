import {React,useState} from "react";
import FlightOption from "./FlightOptions";
import Flight from './Flight'

export default function FlightList({ flighstData, input,setSelectedFlightIndex }) {
  // console.log(flighstData);



  const handleSelectFlight = (index) => {
    setSelectedFlightIndex(flighstData[index]);
  };
  
  return (
    <>
      <div className="flight-list grid grid-cols-3 gap-4">
        {flighstData.map((flights, index) => (
          <FlightOption key={index} flights={flights} input={input} i={index} handleSelectFlight={handleSelectFlight} />
        ))}
      </div>
    </>
  );
}
