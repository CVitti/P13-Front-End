// @ts-nocheck

// React/React-router/Redux components import
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Custom components and pages import
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import ErrorPage from '../pages/ErrorPage';

// CSS Import
import '../styles/pages/App.css';

/**
 * Router of the Argent Bank App
 * @returns Pages and components code according to the currently used route
 */
function AppRouter() {
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* Header for every page */}
        <Header />

        <Routes>          
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />}/>

          {/* Sign In Route */}
          <Route path="/login" element={<LoginPage />}/>

          {/* User Page Route */}
          <Route path="/profile" element={<ProfilePage />}/>

          {/* Error Route */}
          <Route path="*" element={<ErrorPage />}/>
        </Routes>

        {/* Footer for every page */}
        <Footer/>
      </React.Fragment>
    </BrowserRouter>        
  );
}

export default AppRouter;
