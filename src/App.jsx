import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navigation/navigation";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
