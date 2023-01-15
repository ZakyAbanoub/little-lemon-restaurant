import HeroImage from "../assets/hero-image.jpg";

const CallToAction = () => {
  return (
    <div className="bg-primary_1 text-white py-5 h-[400px] relative">
      <div className="flex justify-between container mx-auto">
        <div className="hero_text">
          <h1 className="text-4xl text-primary_2 mb-2">Little Lemon</h1>
          <h3 className="text-xl mb-4">Chicago</h3>
          <p className="sm:w-3/4 lg:w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            beatae asperiores laudantium, laborum deserunt fuga quaerat qui
            recusandae consectetur dolorum ad voluptatum ullam autem tempore
            nisi esse ab, excepturi cum?
          </p>
          <button className="bg-primary_2 text-secondary_4 px-4 py-2 rounded-[25px] absolute bottom-5">
            Reserve a Table
          </button>
        </div>
        <div className="hero_image">
          <div className="img-container w-[375px] h-[430px] rounded-[12px] overflow-hidden">
            <img
              src={HeroImage}
              alt="hero-bruschetta"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
