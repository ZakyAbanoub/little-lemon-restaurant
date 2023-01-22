import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import App from "./App";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "booking",
    element: <BookingPage />,
  },
  {
    path: "booking-confirmed",
    element: <ConfirmedBookingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
