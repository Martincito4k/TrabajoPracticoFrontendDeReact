import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold tracking-wide">
            <span className="text-yellow-400">PJ</span> Products
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/catalogo"
                className="hover:text-yellow-400 transition duration-300"
              >
                Catálogo
              </Link>
            </li>
            <li>
              <Link
                to="/fabricantes"
                className="hover:text-yellow-400 transition duration-300"
              >
                Fabricantes
              </Link>
            </li>
            <li>
              <Link
                to="/componentes"
                className="hover:text-yellow-400 transition duration-300"
              >
                Componentes
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            className="text-white hover:text-yellow-400 transition duration-300 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
