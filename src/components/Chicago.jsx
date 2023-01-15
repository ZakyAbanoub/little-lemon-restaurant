import ChicagoFirst from "../assets/chicago-first.jpg";
import ChicagoSecond from "../assets/chicago-second.jpg";
const Chicago = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-2 gap-10 h-[400px]">
        <div className="hero_text">
          <h1 className="text-4xl text-primary_2 mb-2">Little Lemon</h1>
          <h3 className="text-xl mb-6">Chicago</h3>
          <p className="w-[300px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            beatae asperiores laudantium, laborum deserunt fuga quaerat qui
            recusandae consectetur dolorum ad voluptatum ullam autem tempore
            nisi esse ab, excepturi cum?
          </p>
        </div>
        <div className="chicago-image  relative">
          <div className="img-container">
            <img
              src={ChicagoFirst}
              alt="our chiefs"
              className="absolute top-0  right-0 w-2/4 h-[300px] object-cover object-[70%] z-10"
            />
            <img
              src={ChicagoSecond}
              alt="our chiefs"
              className="absolute bottom-0 left-[25%] w-2/4 h-[300px] object-cover object-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chicago;
