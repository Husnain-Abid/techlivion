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
import CaseStudy from './Componets/Pages/CaseStudy';
import News from './Componets/Pages/News';
import JoinUs from './Componets/Pages/JoinUs';
import Quote from './Componets/Pages/Quote';




function App() {
  return (
    <Router>
 
<div className='main'>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/news" element={<News />} />
        <Route path="/join-us" element={<JoinUs/>} />
        {/* Add more routes as needed */}

        <Route path="/services/:slug" element={<ServiceDetail/>} />
       
      </Routes>
      <Footer />


</div>


    </Router>
  );
}

export default App;