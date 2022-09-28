
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
   
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
