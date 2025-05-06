import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Explore from "./Pages/Explore";
import Create from "./Pages/Create";
import TeamsH from "./Components/TeamsH";
import About from "./Pages/About";
import PricingH from "./Components/PricingH";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />               {/* Set Home here */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/teamsH" element={<TeamsH />} />
        <Route path="/pricingH" element={<PricingH />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
