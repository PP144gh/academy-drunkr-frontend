import React from 'react';
import { useRoutes } from 'react-router-dom';
import LoginPage from './LoginPage'; // Import your components
import RegistrationForm from './RegistrationForm';
import Album from './Album';

function AppRoutes() {
  const routes = useRoutes([
    // Define your routes here
    {
      path: '/login',
      element: <LoginPage />, // Render LoginPage component when /login is visited
    },
    {
      path: '/register',
      element: <RegistrationForm />, // Render RegistrationForm component when /register is visited
    },
    {
      path: '/album',
      element: <Album />, // Render Album component when /album is visited
    },
    // You can add more routes here as needed
  ]);

  return routes;
}

export default AppRoutes;
