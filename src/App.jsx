import React from 'react';
import RandomUsers from './RandomUsers';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Random User Details</h1>
      <RandomUsers />
    </div>
  );
};

export default App;
