import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import ScrollToTopButton from './components/ScrollToTopButton';
import ChatbotButton from './components/ChatBotButton';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTopButton />
      <ChatbotButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;

