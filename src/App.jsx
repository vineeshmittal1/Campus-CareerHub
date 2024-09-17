import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar_home';
import { Login } from './Components/Login';
import { Footer } from './Components/Footer';
import hero from './assets/hero-carousel-3.svg';
import { MidCard } from './Components/MidCard';
import { LowCard } from './Components/LowCard';
import { Register } from './Components/Register';
function App() {
  return (
    
          <>
         
            <Navbar />
            <div className="my-20 flex justify-center items-center">
              <img src={hero} className="logo h-96" alt="logo" />
            </div>
            <MidCard />
            <LowCard />
            <Footer />
           
          </>
     
  );
}

export default App;
