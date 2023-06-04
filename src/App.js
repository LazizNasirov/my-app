// import Technologies from './Technologies.js'
// import Header from './Header.js'
// import Header from './Header.js' alt + shift + strelka vniz kopiya qiladi
import React from "react";
import './App.css';
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


const App = () => {
  return (
    <div className='app-wrapper'> 
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
