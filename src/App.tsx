import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import Recrutement from './pages/Recrutement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="qui-sommes-nous" element={<About />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="recrutement" element={<Recrutement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
