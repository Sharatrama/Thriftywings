import { React, useState } from "react";
import FlightDetails from "./FlightDetails";
import LayoverDetails from "./LayoverDetails";
import { TbArrowsExchange2 } from "react-icons/tb";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { LiaPlaneArrivalSolid } from "react-icons/lia";
import { GiCommercialAirplane } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function FlightOption({
  flights,
  input,
  i,
  handleSelectFlight,
}) {
  // console.log(flights.flights.airplane);
  // let layovers = flights.layovers;

  let flight = flights.flights;
  // console.log(flights);
  return (
    <>
      {/* {layovers?.map((layover, index) => (
          <LayoverDetails key={index} layover={layover} />
        ))} */}
      {/* <div className="summary">
          <p>
            <strong>Total Carbon Emissions:</strong>{" "}
            {flights.carbon_emissions.this_flight} g (Typical:{" "}
            {flights.carbon_emissions.typical_for_this_route} g, Difference:{" "}
            {flights.carbon_emissions.difference_percent}%)
          </p>
        </div> */}

      <main className="w-full mx-auto pt-10 pb-36 px-8">
        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
          <div className="w-full flex-1 mt-8 p-8 order-2 bg-white- shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none hover:scale-105 ease-in-out duration-300">
            <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-[#010101] text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
              <div className="mb-5 pb-2 flex items-center justify-center border-b border-gray-600">
                <img
                  src={flights.airline_logo}
                  alt=""
                  className="rounded-3xl w-20 h-20 mb-20"
                />
                <div className="ml-5 ">
                  <span className="block text-3xl font-semibold text-white  ">
                    {flights.flights[0].airline}
                  </span>
                  <span>
                    <span className="font-medium text-xl align-top">
                      ₹&thinsp;
                    </span>
                    <span className="text-3xl font-bold text-white">
                      {flights.price}{" "}
                    </span>
                  </span>

                  <div className="ml-36 ">
                    <span className="block text-3xl font-semibold text-white">
                      {input.departure}
                    </span>
                    <span className="block text-3xl font-semibold text-white">
                      <TbArrowsExchange2 />
                    </span>
                    <span className="block text-3xl font-semibold text-white">
                      {input.arival}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="mb-10 font-medium text-xl">
                <li className="flex mb-6">
                  <LiaPlaneDepartureSolid />
                  <span className="ml-3">
                    Departure:{" "}
                    <span className="text-white">
                      {flights.flights[0].departure_airport.time}
                    </span>
                  </span>
                </li>
                <li className="flex mb-6">
                  <LiaPlaneArrivalSolid />
                  <span className="ml-3">
                    Arival:
                    <span className="text-white">
                      {
                        flights.flights[flights.flights.length - 1]
                          .arrival_airport.time
                      }
                    </span>
                  </span>
                </li>
                <li className="flex">
                  <GiCommercialAirplane />
                  <span className="ml-3">
                    <span className="text-white">
                      {flights.flights[0].airplane}
                    </span>
                  </span>
                </li>
              </ul>

              <Link
                to="/flight"
                className="flex justify-center items-center bg-[#12296c] rounded-xl py-6 px-4 text-center text-white text-2xl"
                key={i}
                onClick={() => handleSelectFlight(i)}
              >
                FLY{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
