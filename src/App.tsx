import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Software } from './pages/Software';
import { Accounting } from './pages/Accounting';
import { Transport } from './pages/Transport';
import { Electronics } from './pages/Electronics';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/software" element={<Software />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;