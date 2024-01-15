import Ambience from "../components/Ambience";
import Booking from "../components/Booking";
import Delivery from "../components/Delivery";
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
      <Ambience />
      <Delivery />
    </div>
  );
};

export default Home;
