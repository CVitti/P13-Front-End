// @ts-nocheck


// React/React-router components import
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Custom components and pages import
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import UserPage from '../pages/UserPage';
import ErrorPage from '../pages/ErrorPage';

// CSS Import
import '../styles/pages/App.css';

/**
 * 
 * @returns Pages and components code according to the currently used route
 */
function AppRouter() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>         

          {/* Home Page Route */}
          <Route path="/" element={
            <React.Fragment>
              <Header />
              <HomePage />
              <Footer/>
            </React.Fragment>}/>

          {/* Sign In Route */}
          <Route path="/signin" element={
            <React.Fragment>
              <Header />
              <SignInPage />
              <Footer/> 
            </React.Fragment>}/>

          {/* User Page Route */}
          <Route path="/user" element={
            <React.Fragment>
              <Header />
              <UserPage />
              <Footer/> 
            </React.Fragment>}/>

          {/* Error Route */}
          <Route path="*" element={
            <React.Fragment>
              <Header />
              <ErrorPage />
              <Footer/>
            </React.Fragment>}/>

        </Routes>
      </BrowserRouter>
    </React.Fragment>   
  );
}

export default AppRouter;
