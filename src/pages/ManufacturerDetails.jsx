import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ManufacturerDetails = () => {
  const { id } = useParams();
  const [manufacturer, setManufacturer] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/fabricantes/${id}`)
      .then((response) => response.json())
      .then((data) => setManufacturer(data))
      .catch((error) => console.error('Error al cargar fabricante:', error));
  }, [id]);

  if (!manufacturer) return <p>Cargando fabricante...</p>;

  const imagePath = `/images/fabricantes/${manufacturer.pathImgPerfil?.split('/').pop() || 'no-image.jpg'}`;

  // Convertir las fechas a un formato más legible
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
      <h1 className="text-gray-700 text-4xl font-bold mb-4">{manufacturer.nombre}</h1>
      <div className="w-full max-w-md rounded-lg shadow-md overflow-hidden bg-gray-100">
        <img
          src={imagePath}
          alt={manufacturer.nombre}
          className="w-full h-[300px] object-cover"
          onError={(e) => {
            e.target.src = '/images/fabricantes/no-image.jpg';
          }}
        />
      </div>
      <div className="text-lg mt-6 text-gray-700 text-center">
        <p><strong>Dirección:</strong> {manufacturer.direccion}</p>
        <p><strong>Teléfono:</strong> {manufacturer.numeroContacto}</p>
        <p><strong>Creado el:</strong> {formatDate(manufacturer.createdAt)}</p>
        <p><strong>Última actualización:</strong> {formatDate(manufacturer.updatedAt)}</p>
      </div>
    </div>
  );
};

export default ManufacturerDetails;
