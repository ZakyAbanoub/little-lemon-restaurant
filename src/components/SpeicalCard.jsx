import GreekSalad from "../assets/greek-salad.jpg";
import DeliveryIcon from "../assets/delivery-icon.png";

const SpeicalCard = () => {
  return (
    <div>
      <div className="img-container">
        <img
          src={GreekSalad}
          alt="Greek Salad Dish"
          className="rounded-tl-lg rounded-tr-lg border border-black"
        />
      </div>
      <div className="special_description p-3 bg-[#EDEFEE]">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">Greek Salad</h3>
          <p className="speial_price text-[#EE9972]">$12.99</p>
        </div>
        <p className="mb-2">
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <p className="font-bold flex justify-start items-center">
          Order a delivery
          <div className="ml-2">
            <img src={DeliveryIcon} alt="delivery icon" />
          </div>
        </p>
      </div>
    </div>
  );
};

export default SpeicalCard;
