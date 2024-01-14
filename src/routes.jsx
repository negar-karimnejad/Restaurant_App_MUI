import About from "./pages/About";
import Dishes from "./pages/Dishes";
import Home from "./pages/Home";
import Services from "./pages/Services";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/dishes", element: <Dishes /> },
  { path: "/services", element: <Services /> },
  { path: "/about-us", element: <About /> },
];
export default routes;
