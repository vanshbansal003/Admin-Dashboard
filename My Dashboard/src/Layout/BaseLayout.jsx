import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Sidebar from '../components/Sidebar/Sidebar.jsx'; 
const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar />
      {/* Right of page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;