import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Pricing from './Pricing';
import Features from './Features';
import Contact from './Contact';
import Reviews from './Reviews';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}