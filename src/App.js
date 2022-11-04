import { Route, Routes } from "react-router-dom";
import "./App.css";
import Earth from "./assets/pages/Earth/Earth";
import Jupiter from "./assets/pages/Jupiter/Jupiter";
import Mars from "./assets/pages/Mars/Mars";
import Mercury from "./assets/pages/Mercury/Mercury";
import Neptune from "./assets/pages/Neptune/Neptune";
import Saturn from "./assets/pages/Saturn/Saturn";
import Uranus from "./assets/pages/Uranus/Uranus";
import Venus from "./assets/pages/Venus/Venus";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
        <Routes>
          <Route index element={<Earth />} />
          <Route path="mars" element={<Mars />} />
          <Route path="jupiter" element={<Jupiter />} />
          <Route path="neptune" element={<Neptune />} />
          <Route path="mercury" element={<Mercury />} />
          <Route path="saturn" element={<Saturn />} />
          <Route path="venus" element={<Venus />} />
          <Route path="uranus" element={<Uranus />} />
        </Routes>
    </>
  );
}

export default App;
