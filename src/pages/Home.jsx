const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Bienvenidos a <span className="text-yellow-300">PJ</span> Products
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Innovando en productos para la vida diaria. Combinamos{" "}
          <span className="font-semibold">tecnología</span> y{" "}
          <span className="font-semibold">funcionalidad</span>.
        </p>
      </div>

      <div className="md:flex-row gap-8 items-center">
        <img
          src="/images/logo.png"
          alt="Logo de PjProducts"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg"
        />
        <iframe
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-64 rounded-lg shadow-lg mt-8"
          src="https://www.youtube.com/embed/j6avvU28W6g?si=cD3J_8wvsdhLbQJD"
          title="Video de presentación"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg md:text-xl mb-4">
          <strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM
        </p>
        <iframe
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-64 rounded-lg mt-4 shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.427238430334!2d-58.641771873046864!3d-34.61864219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses!2sar!4v1732037920055!5m2!1ses!2sar"
          title="Ubicación en Google Maps"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
