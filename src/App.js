import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Componets/Footer/Footer';
import Header from './Componets/Header/Header';
import Home from './Componets/Pages/Home';
import Portfolio from './Componets/Pages/Portfolio';
import Contact from './Componets/Pages/Contact';
import Services from './Componets/Pages/Services';
import About from './Componets/Pages/About';
import ServiceDetail from './Componets/Pages/ServiceDetail';




function App() {
  return (
    <Router>
 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}

        <Route path="/services/:slug" element={<ServiceDetail/>} />
       
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;