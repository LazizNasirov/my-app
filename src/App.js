// import Technologies from './Technologies.js'
// import Header from './Header.js'
// import Header from './Header.js' alt + shift + strelka vniz kopiya qiladi
import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs />}/>
                        <Route path="/profile" element={<Profile />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
