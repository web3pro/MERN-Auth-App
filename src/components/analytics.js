import React, { useEffect, useState } from "react";
import DashNav from "./DashNav";
import Breadcrumb from "./breadcrumb";

export default function Analytics() {
  
  return (
    <>
      <div className="dashboard_container">
      <Breadcrumb />

        <h2 className="navbar-text">Welcome! </h2>
            <DashNav />
        <div className="dashboard_content">
            <h1>Analytics</h1>
            <p>Content goes here.</p>
        </div>
      </div>
      
    </>
  );
};