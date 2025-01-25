import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './pages/Home'; // Import Home component

function App() {
  return (
    <Router>
      {/* Navbar is now inside Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//     </div>
//   );
// };

// export default Home;
