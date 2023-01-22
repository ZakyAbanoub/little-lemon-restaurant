import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const reducer = (state, action) => {
  // console.log(action);
  if (action.type === "change-dates") {
    return (state = action.payload);
  }
};

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const [time, setTime] = useState(17);
  const [guestsNumber, setGuestsNumber] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const initializeTimes = [
    { label: "17:00", value: "17" },
    { label: "18:00", value: "18" },
    { label: "19:00", value: "19" },
    { label: "20:00", value: "20" },
    { label: "21:00", value: "21" },
    { label: "22:00", value: "22" },
    { label: "23:00", value: "23" },
  ];
  const [state, dispatch] = useReducer(reducer, initializeTimes);

  const updateTimes = useCallback(() => {
    const datesArray = fetchAPI(new Date(date));
    dispatch({
      type: "change-dates",
      payload: datesArray.map((date) => ({
        label: date,
        value: date,
      })),
    });
    // window["fetchAPI"](date);
  }, [date]);

  const submitForm = (event, formData) => {
    console.log(event, formData);
    event.preventDefault();
    const confirmed = submitAPI(formData);
    console.log(confirmed);
    if (confirmed) {
      navigate("/booking-confirmed");
    }
  };

  useEffect(() => {
    updateTimes();
  }, [date, updateTimes]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        {React.cloneElement(children, {
          availableTimes: state,
          date,
          setDate,
          time,
          setTime,
          guestsNumber,
          setGuestsNumber,
          occasion,
          setOccasion,
          submitForm,
        })}
      </Main>
      <Footer />
    </div>
  );
};

export default MainLayout;
