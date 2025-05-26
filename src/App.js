import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import Explore from "./Pages/Explore";
// import Create from "./Pages/Create";
// import TeamsH from "./Components/TeamsH";
// import About from "./Pages/About";
// import PricingH from "./Components/PricingH";
import Dashboard from "./Dashboard/Dashboard";
import VideoGenerator from './Dashboard/componentsD/Createvidpg1';
import ProfileSettings from './ProfileSettings/ProfileSettings'; // Make sure path is correct
import TeamCollab from "./TeamCollab/TeamCollab";
import AdminCommandHub from "./AdminCommandHub/AdminCommandHub" 



function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-video" element={<VideoGenerator />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/team-collaboration" element={<TeamCollab />} />
        <Route path="/admin" element={<AdminCommandHub />} /> 
      </Routes>
    </Router>
  );
}

      // <Router>
      // <Header />
      // <Routes>
      //   <Route path="/" element={<Home />} />               {/* Set Home here */}
      //   <Route path="/explore" element={<Explore />} />
      //   <Route path="/create" element={<Create />} />
      //   <Route path="/teamsH" element={<TeamsH />} />
      //   <Route path="/pricingH" element={<PricingH />} />
      //   <Route path="/about" element={<About />} />
      // </Routes>
      // </Router>

export default App;
