import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import CustomerPage from './pages/CustomerPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage/>}/>
        <Route path="/customer/:customerId" element={<CustomerPage/>} />
        </Routes>
    </Router>
  );
};

export default App