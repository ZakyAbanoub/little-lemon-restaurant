import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("validate initializeTimes to returns the correct expected value", () => {
  render(
    <BookingForm
      availableTimes={[
        { label: "17:00", value: "17" },
        { label: "18:00", value: "18" },
        { label: "19:00", value: "19" },
        { label: "20:00", value: "20" },
        { label: "21:00", value: "21" },
      ]}
    />
  );
  const lastOption = screen.getByTestId("last-option");
  expect(lastOption).toHaveTextContent("21:00");
});

test("validate initializeTimes updateTimes to change the initial available times until 21:00", () => {
  render(
    <BookingForm
      availableTimes={
        new Date().getTime() < 1674424800000
          ? [
              { label: "17:00", value: "17" },
              { label: "18:00", value: "18" },
              { label: "19:00", value: "19" },
              { label: "20:00", value: "20" },
              { label: "21:00", value: "21" },
            ]
          : [
              { label: "17:00", value: "17" },
              { label: "18:00", value: "18" },
              { label: "19:00", value: "19" },
              { label: "20:00", value: "20" },
              { label: "21:00", value: "21" },
              { label: "22:00", value: "22" },
              { label: "23:00", value: "23" },
            ]
      }
    />
  );
  const lastOption = screen.getByTestId("last-option");
  expect(lastOption).toHaveTextContent("21:00");
});

test("validate initializeTimes updateTimes to change the initial available times until 23:00", () => {
  render(
    <BookingForm
      availableTimes={
        new Date("02-02-2025").getTime() < 1674424800000
          ? [
              { label: "17:00", value: "17" },
              { label: "18:00", value: "18" },
              { label: "19:00", value: "19" },
              { label: "20:00", value: "20" },
              { label: "21:00", value: "21" },
            ]
          : [
              { label: "17:00", value: "17" },
              { label: "18:00", value: "18" },
              { label: "19:00", value: "19" },
              { label: "20:00", value: "20" },
              { label: "21:00", value: "21" },
              { label: "22:00", value: "22" },
              { label: "23:00", value: "23" },
            ]
      }
    />
  );
  const lastOption = screen.getByTestId("last-option");
  expect(lastOption).toHaveTextContent("23:00");
});
