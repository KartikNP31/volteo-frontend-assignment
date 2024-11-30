import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';


const App = () => {
  

  return (
    <div className="App h-full">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} >
            <Route path='/' element={<Navigate to="/Home" replace/>} />
            <Route path='/Home' element={<Home />} />
          </Route>
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;