import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
