
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './component/navbar';


function App() {
  return (
    <Router>
      <Navbar />  
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
