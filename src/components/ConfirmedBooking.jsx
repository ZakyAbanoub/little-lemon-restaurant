import CheckImage from "../assets/check-image.png";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <section className="h-screen container mx-auto ">
      <div className="md:w-[500px] w-[300px] mx-auto mt-10">
        <img src={CheckImage} alt="Confirmed Book" className="w-full h-full" />
      </div>
      <p className="text-3xl text-center mt-10 font-serif">
        Thank you for booking with us
      </p>
      <Link
        to="/"
        className="bg-primary_2 text-secondary_4 px-4 py-2 rounded-[25px] mt-10 text-center mx-auto block"
      >
        Go to the main page
      </Link>
    </section>
  );
};

export default ConfirmedBooking;
