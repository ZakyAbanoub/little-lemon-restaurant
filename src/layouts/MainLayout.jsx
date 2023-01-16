import React, { useCallback, useEffect, useReducer, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const reducer = (state, action) => {
  if (action.type === "all-dates") {
    return [
      { label: "17:00", value: "17" },
      { label: "18:00", value: "18" },
      { label: "19:00", value: "19" },
      { label: "20:00", value: "20" },
      { label: "21:00", value: "21" },
      { label: "22:00", value: "22" },
      { label: "23:00", value: "23" },
    ];
  }
  if (action.type === "some-dates") {
    return [
      { label: "17:00", value: "17" },
      { label: "18:00", value: "18" },
      { label: "19:00", value: "19" },
      { label: "20:00", value: "20" },
      { label: "21:00", value: "21" },
    ];
  }
};

const MainLayout = ({ children }) => {
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
    console.log(new Date(date).getTime() < 1674424800000);
    if (new Date(date).getTime() < 1674424800000) {
      dispatch({ type: "some-dates" });
    } else {
      dispatch({ type: "all-dates" });
    }
  }, [date]);

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
        })}
      </Main>
      <Footer />
    </div>
  );
};

export default MainLayout;
