import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menus from './pages/Menus';
import PrivateEvents from './pages/PrivateEvents';
import Contact from './pages/Contact';
import Brunch from './pages/Brunch';
import Dinner from './pages/Dinner';
import Desserts from './pages/Desserts';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/menus"          element={<Menus />} />
          <Route path="/menus/brunch"   element={<Brunch />} />
          <Route path="/menus/dinner"   element={<Dinner />} />
          <Route path="/menus/desserts" element={<Desserts />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/contact"        element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}