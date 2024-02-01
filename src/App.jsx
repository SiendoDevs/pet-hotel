// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import MapScreen from './pages/MapScreen';
import SignIn from './pages/Formularios/SignIn';
import SignUp from './pages/Formularios/SignUp';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/map" element={<MapScreen />} /> 
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;

