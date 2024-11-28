import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 max-w-[300px] shadow-md rounded-lg">
      <Link to={`/catalogo/${product.id}`} className="block">
        <div className="w-[260px] h-[400px] flex items-center justify-center bg-gray-100 overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = '/images/productos/no-image.jpg'; }}
          />
        </div>
      </Link>
      <h3 className="text-gray-700 text-xl font-bold mt-2">{product.name}</h3>
      <p className="text-gray-700">{product.description || 'Descripción no disponible'}</p>
      <p className="font-semibold text-blue-600">Precio: ${product.price}</p>
      <Link 
        to={`/catalogo/${product.id}`} 
        className="block mt-2 text-blue-500 hover:underline"
      >
        Ver Detalles
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
