import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginPage from './components/LoginPage';
import Album from './components/Album';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/album" element={<Album />} />
    </Routes>
  );
}

export default App;