import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ComponentDetails = () => {
  const { id } = useParams();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/componentes/${id}`)
      .then((response) => response.json())
      .then((data) => setComponent(data))
      .catch((error) => console.error('Error al cargar componente:', error));
  }, [id]);

  if (!component) return <p>Cargando componente...</p>;

  // Formatear fechas
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('es-AR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-gray-700 text-4xl font-bold mb-4">{component.nombre}</h1>
      <p className="text-lg mt-4 text-gray-700 text-center">
        {component.descripcion || 'Descripción no disponible'}
      </p>
      <div className="text-lg mt-6 text-gray-700 text-center">
        <p><strong>Creado el:</strong> {formatDate(component.createdAt)}</p>
        <p><strong>Última actualización:</strong> {formatDate(component.updatedAt)}</p>
      </div>
    </div>
  );
};

export default ComponentDetails;
