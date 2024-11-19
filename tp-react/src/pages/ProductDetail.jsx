import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [manufacturers, setManufacturers] = useState([]);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/productos/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error al cargar el producto:', error));

    fetch(`http://localhost:5000/productos/${id}/fabricantes`)
      .then((response) => response.json())
      .then((data) => setManufacturers(data || []))
      .catch((error) => console.error('Error al cargar fabricantes:', error));

    fetch(`http://localhost:5000/productos/${id}/componentes`)
      .then((response) => response.json())
      .then((data) => setComponents(data || []))
      .catch((error) => console.error('Error al cargar componentes:', error));
  }, [id]);

  if (!product) return <p>Cargando detalles del producto...</p>;

  const imagePath = `/images/productos/${product.pathImg?.split('/').pop() || 'no-image.jpg'}`;

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-gray-700 text-4xl font-bold mb-4">{product.nombre}</h1>
      <div className="w-full max-w-lg h-[400px] rounded-lg shadow-md overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={imagePath}
          alt={product.nombre}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = '/images/productos/no-image.jpg'; }}
        />
      </div>
      <p className="text-lg text-gray-700 mt-6 text-center">{product.descripcion}</p>
      <p className="text-lg text-gray-700 mt-6 font-semibold text-center">Precio: ${product.precio}</p>
      <div className="mt-8 w-full max-w-4xl">
        <h2 className="text-gray-700 text-2xl font-bold mb-4">Fabricantes</h2>
        <ul className="list-disc pl-6 mb-6">
          {manufacturers.length > 0 ? (
            manufacturers.map((manufacturer) => (
              <li key={manufacturer.id}>
                <Link to={`/fabricantes/${manufacturer.id}`} className="text-blue-500 hover:underline">
                  {manufacturer.nombre}
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-700">No hay fabricantes asociados.</p>
          )}
        </ul>

        <h2 className="text-gray-700 text-2xl font-bold mb-4">Componentes</h2>
        <ul className="list-disc pl-6">
          {components.length > 0 ? (
            components.map((component) => (
              <li key={component.id}>
                <Link to={`/componentes/${component.id}`} className="text-blue-500 hover:underline">
                  {component.nombre}
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-700">No hay componentes asociados.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
