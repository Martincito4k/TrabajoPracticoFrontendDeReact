const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Sistema de Gestión de Productos</p>
          <p className="mt-2">
            Desarrollado por: <span className="font-bold">Martin Bercaitz, Thomas Casco y Santino Galdin</span>
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-center text-sm text-gray-500">
          <p>Trabajo Práctico de React - Construcción de Interfaces de Usuario - UNAHUR</p>
          <p>&copy; {new Date().getFullYear()} Sistema de Gestión de Productos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
