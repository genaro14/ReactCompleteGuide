import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
 

  useEffect(() => { // Evaluacion del Alm local con effec (1 vez)
    const storedLoggedInd = localStorage.getItem('isLoggedIn'); // obtiene de Alm Local un loggin previo
  
    if (storedLoggedInd === '1') {
      setIsLoggedIn(true);
    }
  },[]);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn',1); // Almacenamiento Local del navegador
    
    setIsLoggedIn(true);


  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
