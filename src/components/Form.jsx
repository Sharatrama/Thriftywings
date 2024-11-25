import React from "react";
import { Flightlist } from "../store/flightsdetails";
import { useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Form() {
  const { submit, input, fetchdata } = useContext(Flightlist);

  useGSAP(() => {
    gsap.from("#form", {
      opacity: 0,
      duration: 2,
      delay: 1,
      ease: "power3.out",
    });
  });

  return (
    <>
      <div
        className="flex flex-col items-center bg- text-black w-full"
        id="form"
      >
        <main className="w-5/6 my-32 ">
          <div className="bg-[#010101] p-8 rounded-lg shadow-md text-center">
            <h1 className="mb-5">
              Discover A World Of Comfort And Convenience.
            </h1>
            <form
              className="flex flex-wrap justify-center gap-4"
              onSubmit={fetchdata}
            >
              <input
                type="text"
                name="departure"
                placeholder="From Bengaluru (BLR)"
                className="p-2 rounded border-none"
                value={input.departure}
                onChange={submit}
              />
              <input
                type="text"
                name="arival"
                placeholder="To Country, city or airport"
                className="p-2 rounded border-none"
                value={input.arival}
                onChange={submit}
              />
              <input
                type="date"
                name="outboundDate"
                placeholder="Depart"
                className="p-2 rounded border-none"
                value={input.outboundDate}
                onChange={submit}
              />
              <input
                type="date"
                name="returnDate"
                placeholder="Return"
                className="p-2 rounded border-none"
                value={input.returnDate}
                onChange={submit}
              />
              <select className="p-2 rounded border-none">
                <option>Economy</option>
              </select>
              <button
                type="submit"
                className="p-2 rounded bg-orange-500 text-white hover:bg-orange-600"
              >
                Search
              </button>
              <div className="flex gap-5 mt-2 ml-0 text-white">
                <label>
                  <input type="checkbox" className="mr-2" /> Add nearby airports
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> Add nearby airports
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> Direct flights
                </label>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
