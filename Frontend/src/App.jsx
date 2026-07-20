
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import Resources from './components/Resources/Resources';
import Home from './components/Home/Home';
import './App.css';
import WhatsAppButtons from './components/WhatsAppButtons/WhatsAppButtons';
import ServiceDetail from './components/Services/ServiceDetail/ServiceDetail';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
             <Route path="/services" element={<Services />} />
{/* <Route path="/services/:serviceId" element={<Services />} /> */}
<Route path="/services/:slug"    element={<ServiceDetail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/resources" element={<Resources />} />
            
          </Routes>
        </main>
        <Footer />
        <WhatsAppButtons /> 
      </div>
    </Router>
  );
}

export default App;
