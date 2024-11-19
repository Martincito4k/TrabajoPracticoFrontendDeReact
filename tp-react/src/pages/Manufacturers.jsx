import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/fabricantes')
      .then((response) => response.json())
      .then((data) => setManufacturers(data))
      .catch((error) => console.error('Error al cargar fabricantes:', error));
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-gray-700 text-3xl md:text-4xl font-bold mb-6">Fabricantes</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {manufacturers.map((manufacturer) => (
          <li key={manufacturer.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-gray-700 text-xl font-bold">{manufacturer.nombre}</h2>
            <Link to={`/fabricantes/${manufacturer.id}`} className="text-blue-500 hover:underline">
              Ver Detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Manufacturers;
