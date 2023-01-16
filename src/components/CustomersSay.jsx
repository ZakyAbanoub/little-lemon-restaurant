import TestiminialCard from "./TestiminialCard";

const CustomersSay = () => {
  return (
    <div className="py-20 bg-[#D9D9D9]">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl">What our customers say!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <TestiminialCard />
          <TestiminialCard />
          <TestiminialCard />
          <TestiminialCard />
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
