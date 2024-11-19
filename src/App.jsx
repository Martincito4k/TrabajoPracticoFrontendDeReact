import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Manufacturers from './pages/Manufacturers';
import ManufacturerDetails from './pages/ManufacturerDetails';
import ComponentDetails from './pages/ComponentDetails';
import Components from './pages/Components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/catalogo/:id" element={<ProductDetail />} />
        <Route path="/fabricantes" element={<Manufacturers />} />
        <Route path="/fabricantes/:id" element={<ManufacturerDetails />} />
        <Route path="/componentes" element={<Components />} />
        <Route path="/componentes/:id" element={<ComponentDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;