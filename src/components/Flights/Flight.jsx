import React from "react";
import { Flightlist } from "../../store/flightsdetails";
import { useContext } from "react";
import { ImArrowRight } from "react-icons/im";

export default function Flight() {
  const { selectedFlightIndex, metadata } = useContext(Flightlist);
  console.log(selectedFlightIndex);
  return (
    <>
      <div className=" w-auto flex flex-row justify-center items-center my-3">
        <div className="bg-white rounded-xl shadow-lg p-8 h-auto w-auto ">
          <div className="flex justify-evenly items-center">
            <h3 className="text-3xl font-bold text-black mb-4">
              {selectedFlightIndex.flights[0].departure_airport.name}
            </h3>
            <span className="m-3">
              <ImArrowRight />
            </span>
            <h3 className="text-3xl font-bold text-black mb-4">
              {
                selectedFlightIndex.flights[
                  selectedFlightIndex.flights.length - 1
                ].arrival_airport.name
              }
            </h3>
          </div>
          <div className="flex justify-between items-center my-10">
            <img
              src={selectedFlightIndex.airline_logo}
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="text-2xl font-bold text-black mb-4">
              <h3>
                {selectedFlightIndex.flights[0].airline}-
                {selectedFlightIndex.price} ₹&thinsp;
              </h3>
            </div>

            <li className="flex mb-6">
              <span className="ml-3  text-2xl font-bold text-black">
                Total Duration:{" "}
                <span className=" text-xl text-black">
                  {selectedFlightIndex.total_duration} minutes
                </span>
              </span>
            </li>
          </div>

          {selectedFlightIndex.flights.map((f, index) => (
            <div
              key={index}
              className=" grid  rounded-lg shadow-lg p-4 w-auto mb-6"
            >
              <div className=" flex  justify-between mb-5">
                <h3 className="text-3xl font-bold text-black p-1">
                  {f.airplane}
                </h3>
                <h2 className=" text-black ">
                  {" "}
                  Flight Number:-{f.flight_number}
                </h2>
              </div>
              <div className="flex  flex-wrap ">
                <div className="">
                  <h6 className="m-3">{f.departure_airport.id}</h6>
                  <h6 className="text-xl font-bold text-black ">
                    {f.departure_airport.name}
                  </h6>
                  <h6 className="m-3">
                    {" "}
                    Departure Time:-{f.departure_airport.time}
                  </h6>
                </div>
                <span className=" p-6 m-8">
                  <ImArrowRight />
                </span>
                <div>
                  <h6 className="m-3">{f.arrival_airport.id}</h6>
                  <h6 className="text-xl font-bold text-black ">
                    {f.arrival_airport.name}
                  </h6>
                  <h6 className="m-3">
                    Arrival Time:-{f.arrival_airport.time}
                  </h6>
                </div>
              </div>

              <h2 className="w-auto m-3">
                {" "}
                Total Duration:-{f.duration} minutes
              </h2>
            </div>
          ))}
          {selectedFlightIndex.layovers?.map((layover, index) => (
            <div className="layover-details " key={index}>
              <p>
                <strong>Layover:</strong> {layover.name} ({layover.id}) -{" "}
                {layover.duration} minutes
              </p>
            </div>
          ))}
          <center className=" mt-8 hover:scale-105 hover:ease-in-out duration-300">
            <a
              href={metadata[0].google_flights_url}
              className="bg-white  text-purple-600 font-bold py-2 px-4 rounded hover:bg-gray-200 "
              target="_blank"
            >
              Book Your Seat
            </a>
          </center>
        </div>
      </div>
    </>
  );
}
