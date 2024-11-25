import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FlightList from "./components/Flights/FlightList";
import Flight from "./components/Flights/Flight.jsx";
import AllFlight from "./components/AllFlight.jsx";
import Home from "./components/home.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:'/', element:[<Home/>]},
      { path: "/search", element:[,<AllFlight />] },
      { path: "/flight", element: <Flight /> },
    ],
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
