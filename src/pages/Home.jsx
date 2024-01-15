import Booking from "../components/Booking";
import Dishes from "../components/Dishes";
import Partner from "../components/Partner";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Partner />
      <Booking />
      <Dishes />
    </div>
  );
};

export default Home;
