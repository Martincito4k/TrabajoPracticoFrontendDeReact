import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Components = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/componentes')
      .then((response) => response.json())
      .then((data) => setComponents(data))
      .catch((error) => console.error('Error al cargar componentes:', error));
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-gray-700 text-3xl md:text-4xl font-bold mb-6">Componentes</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <li key={component.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-gray-700 text-xl font-bold">{component.nombre}</h2>
            <Link to={`/componentes/${component.id}`} className="text-blue-500 hover:underline">
              Ver Detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Components;
