const BookingForm = ({
  availableTimes = [],
  date,
  setDate,
  time,
  setTime,
  guestsNumber,
  setGuestsNumber,
  occasion,
  setOccasion,
}) => {
  return (
    <>
      <h2>Book Now</h2>
      <form>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time, i) => (
            <option
              data-testid={i === availableTimes.length - 1 ? "last-option" : ""}
              key={time.value}
              value={time.value}
            >
              {time.label}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestsNumber}
          onChange={(e) => setGuestsNumber(+e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
