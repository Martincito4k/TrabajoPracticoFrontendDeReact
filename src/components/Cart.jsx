import PropTypes from 'prop-types';

const Cart = ({ selectedProducts, updateQuantity, calculateTotal }) => {
    return (
        <div className="mt-8 w-full max-w-lg bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Carrito</h2>
            {selectedProducts.length > 0 ? (
                <ul className="space-y-4">
                    {selectedProducts.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                            <span>{item.name || 'Producto sin nombre'}</span>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    value={item.quantity || 1}
                                    min="1"
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                    className="w-12 text-center border rounded-md"
                                />
                                <span className="ml-4 font-semibold">
                                    ${item.price && item.quantity ? item.price * item.quantity : 0}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay productos seleccionados.</p>
            )}
            <p className="mt-4 text-lg font-bold">Total: ${calculateTotal()}</p>
        </div>
    );
};

Cart.propTypes = {
    selectedProducts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.stringisRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    updateQuantity: PropTypes.func.isRequired,
    calculateTotal: PropTypes.func.isRequired,
};

export default Cart;
