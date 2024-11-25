import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { Flightlist } from "./store/flightsdetails.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    name: "nilesh",
    departure: "",
    arival: "",
    outboundDate: "",
    returnDate: "",
  });

  const [bflight, setBFlight] = useState([
    // [
    //   {
    //     flights: [
    //       {
    //         departure_airport: {
    //           name: "Mangaluru International Airport",
    //           id: "IXE",
    //           time: "2024-07-17 20:00",
    //         },
    //         arrival_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-17 21:35",
    //         },
    //         duration: 95,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 164",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 66 kg",
    //         ],
    //       },
    //       {
    //         departure_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-17 23:30",
    //         },
    //         arrival_airport: {
    //           name: "Indira Gandhi International Airport",
    //           id: "DEL",
    //           time: "2024-07-18 01:35",
    //         },
    //         duration: 125,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 2224",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 89 kg",
    //         ],
    //         often_delayed_by_over_30_min: true,
    //       },
    //     ],
    //     layovers: [
    //       {
    //         duration: 115,
    //         name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //         id: "BOM",
    //       },
    //     ],
    //     total_duration: 335,
    //     carbon_emissions: {
    //       this_flight: 156000,
    //       typical_for_this_route: 157000,
    //       difference_percent: -1,
    //     },
    //     price: 13314,
    //     type: "Round trip",
    //     airline_logo:
    //       "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //     departure_token:
    //       "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ3cyUlRFMk5IdzJSVEl5TWpRYUNnaUNhQkFBR2dOSlRsSTRISERRZkE9PSIsW1siSVhFIiwiMjAyNC0wNy0xNyIsIkJPTSIsbnVsbCwiNkUiLCIxNjQiXSxbIkJPTSIsIjIwMjQtMDctMTciLCJERUwiLG51bGwsIjZFIiwiMjIyNCJdXV0=",
    //   },
    //   {
    //     flights: [
    //       {
    //         departure_airport: {
    //           name: "Mangaluru International Airport",
    //           id: "IXE",
    //           time: "2024-07-17 11:25",
    //         },
    //         arrival_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-17 12:55",
    //         },
    //         duration: 90,
    //         airplane: "Airbus A320neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 832",
    //         legroom: "28 in",
    //         extensions: [
    //           "Below average legroom (28 in)",
    //           "Carbon emissions estimate: 64 kg",
    //         ],
    //         often_delayed_by_over_30_min: true,
    //       },
    //       {
    //         departure_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-17 14:15",
    //         },
    //         arrival_airport: {
    //           name: "Indira Gandhi International Airport",
    //           id: "DEL",
    //           time: "2024-07-17 16:25",
    //         },
    //         duration: 130,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 993",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 89 kg",
    //         ],
    //         often_delayed_by_over_30_min: true,
    //       },
    //     ],
    //     layovers: [
    //       {
    //         duration: 80,
    //         name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //         id: "BOM",
    //       },
    //     ],
    //     total_duration: 300,
    //     carbon_emissions: {
    //       this_flight: 155000,
    //       typical_for_this_route: 157000,
    //       difference_percent: -1,
    //     },
    //     price: 13424,
    //     type: "Round trip",
    //     airline_logo:
    //       "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //     departure_token:
    //       "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ3MyUlRnek1udzJSVGs1TXhvS0NQQm9FQUFhQTBsT1VqZ2NjTlI5IixbWyJJWEUiLCIyMDI0LTA3LTE3IiwiQk9NIixudWxsLCI2RSIsIjgzMiJdLFsiQk9NIiwiMjAyNC0wNy0xNyIsIkRFTCIsbnVsbCwiNkUiLCI5OTMiXV1d",
    //   },
    //   {
    //     flights: [
    //       {
    //         departure_airport: {
    //           name: "Mangaluru International Airport",
    //           id: "IXE",
    //           time: "2024-07-17 20:40",
    //         },
    //         arrival_airport: {
    //           name: "Indira Gandhi International Airport",
    //           id: "DEL",
    //           time: "2024-07-17 23:35",
    //         },
    //         duration: 175,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 2344",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 122 kg",
    //         ],
    //         often_delayed_by_over_30_min: true,
    //       },
    //     ],
    //     total_duration: 175,
    //     carbon_emissions: {
    //       this_flight: 122000,
    //       typical_for_this_route: 157000,
    //       difference_percent: -22,
    //     },
    //     price: 13424,
    //     type: "Round trip",
    //     airline_logo:
    //       "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //     departure_token:
    //       "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ1kyUlRJek5EUWFDZ2p3YUJBQUdnTkpUbEk0SEhEVWZRPT0iLFtbIklYRSIsIjIwMjQtMDctMTciLCJERUwiLG51bGwsIjZFIiwiMjM0NCJdXV0=",
    //   },
    // ],
  ]);
  const [oflight, setOFlight] = useState([
    // [
    //   {
    //     flights: [
    //       {
    //         departure_airport: {
    //           name: "Mangaluru International Airport",
    //           id: "IXE",
    //           time: "2024-07-10 20:00",
    //         },
    //         arrival_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-10 21:35",
    //         },
    //         duration: 95,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 164",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 66 kg",
    //         ],
    //       },
    //       {
    //         departure_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-11 01:15",
    //         },
    //         arrival_airport: {
    //           name: "Indira Gandhi International Airport",
    //           id: "DEL",
    //           time: "2024-07-11 03:20",
    //         },
    //         duration: 125,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 2775",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 89 kg",
    //         ],
    //         overnight: true,
    //         often_delayed_by_over_30_min: true,
    //       },
    //     ],
    //     layovers: [
    //       {
    //         duration: 220,
    //         name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //         id: "BOM",
    //       },
    //     ],
    //     total_duration: 440,
    //     carbon_emissions: {
    //       this_flight: 156000,
    //       typical_for_this_route: 157000,
    //       difference_percent: -1,
    //     },
    //     price: 13828,
    //     type: "Round trip",
    //     airline_logo:
    //       "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //     departure_token:
    //       "WyJDalJJYURBd056bHlaekZNWTFWQlFVTkdRWGRDUnkwdExTMHRMUzB0TFhWcVptNHhOVUZCUVVGQlIyRk5WSGxyUms1dGJHZEJFZ3cyUlRFMk5IdzJSVEkzTnpVYUNnaUViQkFBR2dOSlRsSTRISEM2Z1FFPSIsW1siSVhFIiwiMjAyNC0wNy0xMCIsIkJPTSIsbnVsbCwiNkUiLCIxNjQiXSxbIkJPTSIsIjIwMjQtMDctMTEiLCJERUwiLG51bGwsIjZFIiwiMjc3NSJdXV0=",
    //   },
    //   {
    //     flights: [
    //       {
    //         departure_airport: {
    //           name: "Mangaluru International Airport",
    //           id: "IXE",
    //           time: "2024-07-10 17:10",
    //         },
    //         arrival_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-10 18:45",
    //         },
    //         duration: 95,
    //         airplane: "Airbus A320neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 6523",
    //         legroom: "28 in",
    //         extensions: [
    //           "Below average legroom (28 in)",
    //           "Carbon emissions estimate: 64 kg",
    //         ],
    //         often_delayed_by_over_30_min: true,
    //       },
    //       {
    //         departure_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-10 22:15",
    //         },
    //         arrival_airport: {
    //           name: "Indira Gandhi International Airport",
    //           id: "DEL",
    //           time: "2024-07-11 00:25",
    //         },
    //         duration: 130,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 651",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 89 kg",
    //         ],
    //       },
    //     ],
    //     layovers: [
    //       {
    //         duration: 210,
    //         name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //         id: "BOM",
    //       },
    //     ],
    //     total_duration: 435,
    //     carbon_emissions: {
    //       this_flight: 155000,
    //       typical_for_this_route: 157000,
    //       difference_percent: -1,
    //     },
    //     price: 13978,
    //     type: "Round trip",
    //     airline_logo:
    //       "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //     departure_token:
    //       "WyJDalJJYURBd056bHlaekZNWTFWQlFVTkdRWGRDUnkwdExTMHRMUzB0TFhWcVptNHhOVUZCUVVGQlIyRk5WSGxyUms1dGJHZEJFZ3cyUlRZMU1qTjhOa1UyTlRFYUNnaWFiUkFBR2dOSlRsSTRISER0Z2dFPSIsW1siSVhFIiwiMjAyNC0wNy0xMCIsIkJPTSIsbnVsbCwiNkUiLCI2NTIzIl0sWyJCT00iLCIyMDI0LTA3LTEwIiwiREVMIixudWxsLCI2RSIsIjY1MSJdXV0=",
    //   },
    //   {
    //     flights: [
    //       {
    //         departure_airport: {
    //           name: "Mangaluru International Airport",
    //           id: "IXE",
    //           time: "2024-07-10 17:10",
    //         },
    //         arrival_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-10 18:45",
    //         },
    //         duration: 95,
    //         airplane: "Airbus A320neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 6523",
    //         legroom: "28 in",
    //         extensions: [
    //           "Below average legroom (28 in)",
    //           "Carbon emissions estimate: 64 kg",
    //         ],
    //         often_delayed_by_over_30_min: true,
    //       },
    //       {
    //         departure_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-10 21:15",
    //         },
    //         arrival_airport: {
    //           name: "Indira Gandhi International Airport",
    //           id: "DEL",
    //           time: "2024-07-10 23:25",
    //         },
    //         duration: 130,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 102",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 93 kg",
    //         ],
    //       },
    //     ],
    //     layovers: [
    //       {
    //         duration: 150,
    //         name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //         id: "BOM",
    //       },
    //     ],
    //     total_duration: 375,
    //     carbon_emissions: {
    //       this_flight: 159000,
    //       typical_for_this_route: 157000,
    //       difference_percent: 1,
    //     },
    //     price: 14051,
    //     type: "Round trip",
    //     airline_logo:
    //       "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //     departure_token:
    //       "WyJDalJJYURBd056bHlaekZNWTFWQlFVTkdRWGRDUnkwdExTMHRMUzB0TFhWcVptNHhOVUZCUVVGQlIyRk5WSGxyUms1dGJHZEJFZ3cyUlRZMU1qTjhOa1V4TURJYUNnampiUkFBR2dOSlRsSTRISERGZ3dFPSIsW1siSVhFIiwiMjAyNC0wNy0xMCIsIkJPTSIsbnVsbCwiNkUiLCI2NTIzIl0sWyJCT00iLCIyMDI0LTA3LTEwIiwiREVMIixudWxsLCI2RSIsIjEwMiJdXV0=",
    //   },
    //   {
    //     flights: [
    //       {
    //         departure_airport: {
    //           name: "Mangaluru International Airport",
    //           id: "IXE",
    //           time: "2024-07-10 17:10",
    //         },
    //         arrival_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-10 18:45",
    //         },
    //         duration: 95,
    //         airplane: "Airbus A320neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 6523",
    //         legroom: "28 in",
    //         extensions: [
    //           "Below average legroom (28 in)",
    //           "Carbon emissions estimate: 64 kg",
    //         ],
    //         often_delayed_by_over_30_min: true,
    //       },
    //       {
    //         departure_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-10 20:00",
    //         },
    //         arrival_airport: {
    //           name: "Indira Gandhi International Airport",
    //           id: "DEL",
    //           time: "2024-07-10 22:10",
    //         },
    //         duration: 130,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 6049",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 89 kg",
    //         ],
    //         often_delayed_by_over_30_min: true,
    //       },
    //     ],
    //     layovers: [
    //       {
    //         duration: 75,
    //         name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //         id: "BOM",
    //       },
    //     ],
    //     total_duration: 300,
    //     carbon_emissions: {
    //       this_flight: 155000,
    //       typical_for_this_route: 157000,
    //       difference_percent: -1,
    //     },
    //     price: 15182,
    //     type: "Round trip",
    //     airline_logo:
    //       "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //     departure_token:
    //       "WyJDalJJYURBd056bHlaekZNWTFWQlFVTkdRWGRDUnkwdExTMHRMUzB0TFhWcVptNHhOVUZCUVVGQlIyRk5WSGxyUms1dGJHZEJFZzAyUlRZMU1qTjhOa1UyTURRNUdnb0l6bllRQUJvRFNVNVNPQnh3a0k0QiIsW1siSVhFIiwiMjAyNC0wNy0xMCIsIkJPTSIsbnVsbCwiNkUiLCI2NTIzIl0sWyJCT00iLCIyMDI0LTA3LTEwIiwiREVMIixudWxsLCI2RSIsIjYwNDkiXV1d",
    //   },
    //   {
    //     flights: [
    //       {
    //         departure_airport: {
    //           name: "Mangaluru International Airport",
    //           id: "IXE",
    //           time: "2024-07-10 07:55",
    //         },
    //         arrival_airport: {
    //           name: "Chennai International Airport",
    //           id: "MAA",
    //           time: "2024-07-10 09:40",
    //         },
    //         duration: 105,
    //         airplane: "ATR 72",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 7345",
    //         legroom: "28 in",
    //         extensions: [
    //           "Below average legroom (28 in)",
    //           "Carbon emissions estimate: 58 kg",
    //         ],
    //       },
    //       {
    //         departure_airport: {
    //           name: "Chennai International Airport",
    //           id: "MAA",
    //           time: "2024-07-10 13:15",
    //         },
    //         arrival_airport: {
    //           name: "Indira Gandhi International Airport",
    //           id: "DEL",
    //           time: "2024-07-10 16:00",
    //         },
    //         duration: 165,
    //         airplane: "Airbus A321neo",
    //         airline: "IndiGo",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //         travel_class: "Economy",
    //         flight_number: "6E 5010",
    //         legroom: "29 in",
    //         extensions: [
    //           "Below average legroom (29 in)",
    //           "Carbon emissions estimate: 122 kg",
    //         ],
    //       },
    //     ],
    //     layovers: [
    //       {
    //         duration: 215,
    //         name: "Chennai International Airport",
    //         id: "MAA",
    //       },
    //     ],
    //     total_duration: 485,
    //     carbon_emissions: {
    //       this_flight: 182000,
    //       typical_for_this_route: 157000,
    //       difference_percent: 16,
    //     },
    //     price: 15701,
    //     type: "Round trip",
    //     airline_logo:
    //       "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    //     departure_token:
    //       "WyJDalJJYURBd056bHlaekZNWTFWQlFVTkdRWGRDUnkwdExTMHRMUzB0TFhWcVptNHhOVUZCUVVGQlIyRk5WSGxyUms1dGJHZEJFZzAyUlRjek5EVjhOa1UxTURFd0dnb0kxWG9RQUJvRFNVNVNPQnh3L3BJQiIsW1siSVhFIiwiMjAyNC0wNy0xMCIsIk1BQSIsbnVsbCwiNkUiLCI3MzQ1Il0sWyJNQUEiLCIyMDI0LTA3LTEwIiwiREVMIixudWxsLCI2RSIsIjUwMTAiXV1d",
    //   },
    //   {
    //     flights: [
    //       {
    //         departure_airport: {
    //           name: "Mangaluru International Airport",
    //           id: "IXE",
    //           time: "2024-07-10 14:45",
    //         },
    //         arrival_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-10 16:25",
    //         },
    //         duration: 100,
    //         airplane: "Airbus A320",
    //         airline: "Air India",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/AI.png",
    //         travel_class: "Economy",
    //         flight_number: "AI 690",
    //         legroom: "28 in",
    //         extensions: [
    //           "Below average legroom (28 in)",
    //           "Carbon emissions estimate: 79 kg",
    //         ],
    //         often_delayed_by_over_30_min: true,
    //       },
    //       {
    //         departure_airport: {
    //           name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //           id: "BOM",
    //           time: "2024-07-10 18:00",
    //         },
    //         arrival_airport: {
    //           name: "Indira Gandhi International Airport",
    //           id: "DEL",
    //           time: "2024-07-10 20:20",
    //         },
    //         duration: 140,
    //         airplane: "Airbus A321",
    //         airline: "Air India",
    //         airline_logo:
    //           "https://www.gstatic.com/flights/airline_logos/70px/AI.png",
    //         travel_class: "Economy",
    //         flight_number: "AI 660",
    //         legroom: "31 in",
    //         extensions: [
    //           "Average legroom (31 in)",
    //           "Carbon emissions estimate: 132 kg",
    //         ],
    //       },
    //     ],
    //     layovers: [
    //       {
    //         duration: 95,
    //         name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    //         id: "BOM",
    //       },
    //     ],
    //     total_duration: 335,
    //     carbon_emissions: {
    //       this_flight: 212000,
    //       typical_for_this_route: 157000,
    //       difference_percent: 35,
    //     },
    //     type: "Round trip",
    //     airline_logo:
    //       "https://www.gstatic.com/flights/airline_logos/70px/AI.png",
    //     departure_token:
    //       "WyJDalJJYURBd056bHlaekZNWTFWQlFVTkdRWGRDUnkwdExTMHRMUzB0TFhWcVptNHhOVUZCUVVGQlIyRk5WSGxyUms1dGJHZEJFZ3RCU1RZNU1IeEJTVFkyTURnYyIsW1siSVhFIiwiMjAyNC0wNy0xMCIsIkJPTSIsbnVsbCwiQUkiLCI2OTAiXSxbIkJPTSIsIjIwMjQtMDctMTAiLCJERUwiLG51bGwsIkFJIiwiNjYwIl1dXQ==",
    //   },
    // ],
  ]);
  const [metadata, setmetadata] = useState([
    {
      google_flights_url:
        "https://www.google.com/travel/flights?hl=en&gl=us&curr=INR&q=Flights+to+MAD+from+DEL+on+2024-07-25+through+2024-07-27",
    },
  ]);
  const [loading, setloading] = useState(false);
  ("");
  let submit = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput({ ...input, [name]: value });
    // console.log(input);
  };

  let fetchdata = (e) => {
    e.preventDefault();
    try {
      const response = axios.get("https://serpapi.com/search", {
        params: {
          engine: "google_flights",
          departure_id: input.departure,
          arrival_id: input.arival,
          outbound_date: input.outboundDate,
          return_date: input.returnDate,
          currency: "INR",
          hl: "en",
          api_key:
            "6700939c5f01b59f217b907b0ad519ab96796e5cca998e789c5d3332342506da",
        },
      });
      response.then((res) => {
        console.log(res.data);

        let bflights = res.data.best_flights;
        let oflights = res.data.other_flights;
        let metadata = res.data.search_metadata;

        if (bflights.length > 0) {
          setBFlight([bflights]);
        } else {
          alert("no flight available");
        }
        if (oflights.length > 0) {
          setOFlight([oflights]);
        } else {
          alert("no flight available");
        }
        setmetadata([metadata]);
        setloading(true);

        console.log(bflight);
        console.log(oflight);
        console.log(metadata);
      });
    } catch (error) {
      alert(error);
    }
    // navigate("/");
  };

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  // useEffect(() => {

  //   fetch("http://localhost:8080/flights")
  //     .then(response => response.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  const [selectedFlightIndex, setSelectedFlightIndex] = useState({
    flights: [
      {
        departure_airport: {
          name: "Mangaluru International Airport",
          id: "IXE",
          time: "2024-07-17 20:00",
        },
        arrival_airport: {
          name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
          id: "BOM",
          time: "2024-07-17 21:35",
        },
        duration: 95,
        airplane: "Airbus A321neo",
        airline: "IndiGo",
        airline_logo:
          "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
        travel_class: "Economy",
        flight_number: "6E 164",
        legroom: "29 in",
        extensions: [
          "Below average legroom (29 in)",
          "Carbon emissions estimate: 66 kg",
        ],
      },
      {
        departure_airport: {
          name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
          id: "BOM",
          time: "2024-07-17 23:30",
        },
        arrival_airport: {
          name: "Indira Gandhi International Airport",
          id: "DEL",
          time: "2024-07-18 01:35",
        },
        duration: 125,
        airplane: "Airbus A321neo",
        airline: "IndiGo",
        airline_logo:
          "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
        travel_class: "Economy",
        flight_number: "6E 2224",
        legroom: "29 in",
        extensions: [
          "Below average legroom (29 in)",
          "Carbon emissions estimate: 89 kg",
        ],
        often_delayed_by_over_30_min: true,
      },
    ],
    layovers: [
      {
        duration: 115,
        name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        id: "BOM",
      },
    ],
    total_duration: 335,
    carbon_emissions: {
      this_flight: 156000,
      typical_for_this_route: 157000,
      difference_percent: -1,
    },
    price: 13314,
    type: "Round trip",
    airline_logo: "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
    departure_token:
      "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ3cyUlRFMk5IdzJSVEl5TWpRYUNnaUNhQkFBR2dOSlRsSTRISERRZkE9PSIsW1siSVhFIiwiMjAyNC0wNy0xNyIsIkJPTSIsbnVsbCwiNkUiLCIxNjQiXSxbIkJPTSIsIjIwMjQtMDctMTciLCJERUwiLG51bGwsIjZFIiwiMjIyNCJdXV0=",
  });

  return (
    <>
      <Flightlist.Provider
        value={{
          input,
          bflight,
          oflight,
          metadata,
          setSelectedFlightIndex,
          selectedFlightIndex,
          fetchdata,
          submit,
          loading,
        }}
      >
        <Nav />
        {/* <Views input={input} bestf={bflight} otherf={oflight} /> */}

        {/* <AllFlight></AllFlight>
        <Flight/> */}
        <Outlet />
        <Footer />
      </Flightlist.Provider>
    </>
  );
}

export default App;
