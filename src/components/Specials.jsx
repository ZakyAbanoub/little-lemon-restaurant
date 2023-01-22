import SpeicalCard from "./SpeicalCard";

const Specials = () => {
  return (
    <section className="container mx-auto my-[8rem]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-3xl font-bold ">This week specials!</h2>
        <button className="bg-primary_2 text-secondary_4 px-4 py-2 rounded-[25px]">
          Online Menu
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
        <SpeicalCard />
        <SpeicalCard />
        <SpeicalCard />
        <SpeicalCard />
        <SpeicalCard />
        <SpeicalCard />
      </div>
    </section>
  );
};

export default Specials;
