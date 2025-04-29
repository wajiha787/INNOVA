import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Explore from "./Pages/Explore";
import Create from "./Pages/Create";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Signup from './Components/Signup';
import Login from './Components/login'; // Fixed capitalization

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;