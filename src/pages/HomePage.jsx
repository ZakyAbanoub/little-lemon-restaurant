import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";
import Chicago from "../components/Chicago";
import MainLayout from "../layouts/MainLayout";

const Homepage = () => {
  return (
    <MainLayout>
      <>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </>
    </MainLayout>
  );
};

export default Homepage;
