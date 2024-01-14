import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Header />
      {router}
      <Footer/>
    </>
  );
}

export default App;
