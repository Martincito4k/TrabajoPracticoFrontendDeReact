import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/productos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error('Error al cargar productos:', error));
  }, []);

  const toggleProductSelection = (product) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        // Si ya está seleccionado, lo eliminamos del carrito
        return prev.filter((item) => item.id !== product.id);
      } else {
        // Si no está seleccionado, lo añadimos al carrito con datos completos
        const newProduct = {
          id: product.id,
          name: product.nombre || 'Producto sin nombre',
          price: product.precio || 0,
          quantity: 1,
        };
        return [...prev, newProduct];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const calculateTotal = () => {
    const total = selectedProducts.reduce((sum, item) => {
      const subtotal = item.price && item.quantity ? item.price * item.quantity : 0;
      console.log(`Subtotal para ${item.name}: ${subtotal}`); // Diagnóstico
      return sum + subtotal;
    }, 0);
    console.log('Total calculado:', total); // Diagnóstico
    return total;
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-gray-700 text-3xl md:text-4xl font-bold mb-6">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const imagePath = `/images/productos/${product.pathImg.split('/').pop()}`;
          const isSelected = selectedProducts.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <ProductCard
                product={{
                  name: product.nombre,
                  image: imagePath,
                  description: product.descripcion,
                  price: product.precio,
                  id: product.id,
                }}
              />
              <button
                onClick={() => toggleProductSelection(product)}
                className={`mt-2 px-4 py-2 rounded-lg ${
                  isSelected ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                }`}
              >
                {isSelected ? 'Quitar del Carrito' : 'Añadir al Carrito'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Componente Carrito */}
      <Cart
        selectedProducts={selectedProducts}
        updateQuantity={updateQuantity}
        calculateTotal={calculateTotal}
      />
    </div>
  );
};

export default Catalog;
