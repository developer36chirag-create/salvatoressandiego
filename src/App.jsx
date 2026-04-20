import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menus from './pages/Menus';
// Import other page components as you build them:
// import PrivateEvents from './pages/PrivateEvents';
// import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/"      element={<Home />} />
          <Route path="/menus" element={<Menus />} />
          {/* <Route path="/private-events" element={<PrivateEvents />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}