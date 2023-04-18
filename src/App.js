import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavbarRouter from './components/Navbar/NavbarRouter';
import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Footer from "./components/Footer/Footer"
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Courses from './components/pages/Courses';

function App() {

  return (
    <div className="App">
    <NavbarRouter />
    <Routes>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contactUs' element={<ContactUs />}/>
      <Route path='/courses' element={<Courses />}/>
    </Routes>
    </div>
  );
}

export default App;

