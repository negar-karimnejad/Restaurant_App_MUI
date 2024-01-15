import About from "./pages/About";
import Dishes from "./pages/Dishes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/dishes", element: <Dishes /> },
  { path: "/services", element: <Services /> },
  { path: "/about-us", element: <About /> },
  { path: "/*", element: <NotFound /> },
];
export default routes;
