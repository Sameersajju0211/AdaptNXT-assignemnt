import React from 'react';
import Dashboard from './components/Dashboard';
import SidePanel from './components/SidePanel';
import "./App.css"
const App = () => {
  return (
    <div>
      <div className="container-main app-container">
        <SidePanel />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
