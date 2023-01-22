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
  submitForm,
  disabled,
}) => {
  return (
    <section className="bg-primary_1 text-white py-5 container mx-auto">
      <h2 className="text-center text-3xl mb-10">Book Now</h2>
      <form
        onSubmit={(e) => submitForm(e, date)}
        className="md:w-[500px] m-auto"
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="res-date">Choose date</label>
          <input
            required
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-2  text-xl bg-white bg-clip-padding border border-solid border-gray-300 text-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none invalid:border-red-500 invalid:border-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="res-time">Choose time</label>
          <select
            required
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="px-4 py-2  text-xl bg-white bg-clip-padding border border-solid border-gray-300 text-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none invalid:border-red-500 invalid:border-2"
          >
            {availableTimes.map((time, i) => (
              <option
                data-testid={
                  i === availableTimes.length - 1 ? "last-option" : ""
                }
                key={time.value}
                value={time.value}
              >
                {time.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="guests">Number of guests</label>
          <input
            required
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guestsNumber}
            onChange={(e) => setGuestsNumber(+e.target.value)}
            className="px-4 py-2  text-xl bg-white bg-clip-padding border border-solid border-gray-300 text-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none invalid:border-red-500 invalid:border-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="occasion">Occasion</label>
          <select
            required
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="px-4 py-2  text-xl bg-white bg-clip-padding border border-solid border-gray-300 text-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none invalid:border-red-500 invalid:border-2"
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <input
          data-testid="submit-button"
          required
          type="submit"
          value="Make Your reservation"
          className="bg-primary_2 text-secondary_4 px-4 py-2 rounded-[25px] my-5 disabled:bg-gray-400"
          disabled={disabled}
        />
      </form>
    </section>
  );
};

export default BookingForm;
