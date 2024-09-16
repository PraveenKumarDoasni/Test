import React, { useState } from "react";
import './App.css';
import Filter from './Filter';
import Header from './Header';
import Foodselection from './Foodselection';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function will be passed down to the Login component
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        // Show website content after successful login
        <>
        <Filter />
          <Header />
       
          <Foodselection />
        </>
      ) : (
        // Show the login page if not logged in
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
