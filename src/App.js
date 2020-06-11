import React, {useState, useEffect} from 'react';
import Sitebar from './components/home/Navbar';
import Auth from './components/auth/Auth';
import './App.css';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken)
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div>
      <Sitebar clickLogout={clearToken}/>
      <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;
