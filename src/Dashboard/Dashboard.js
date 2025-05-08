import React from 'react';
import Sidebar from './componentsD/Sidebar';
import HeaderD from './componentsD/HeaderD';

import "../Styles/Dashboard.css"
export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content-area">
        <HeaderD />
       
        <div className="main-content">
          
        </div>
      </div>
    </div>
  );
}
