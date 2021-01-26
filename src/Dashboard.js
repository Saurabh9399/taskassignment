import React from "react";
// import Card from "./Card";
import Sidebar from "./Sidebar";
import "./Dashboard.css"
import Report from "./Report";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="home__section">
        <div className="general">
          <h3>General Report</h3>
        </div>
        <div>
          <Report />
        </div>
        <div className="general">
          <h3>Sales Report</h3>
        </div>
        <div>
          <Report />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
