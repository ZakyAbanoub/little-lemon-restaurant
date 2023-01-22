import ChicagoFirst from "../assets/chicago-first.jpg";
import ChicagoSecond from "../assets/chicago-second.jpg";
const Chicago = () => {
  return (
    <section className="container mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:h-[400px]">
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
        <div className="chicago-image md:relative">
          <div className="img-container">
            <img
              src={ChicagoFirst}
              alt="our chiefs"
              className="md:absolute top-0 right-0 md:w-2/4 md:h-[300px] object-cover object-[70%] z-10 mb-2"
            />
            <img
              src={ChicagoSecond}
              alt="our chiefs"
              className="md:absolute bottom-0 left-[25%] md:w-2/4 md:h-[300px] object-cover object-[100%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chicago;
