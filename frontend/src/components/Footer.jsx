function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4 tracking-wider">
          BEAUTY SALON
        </h3>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Professional beauty & wellness services.
          Your beauty is our passion.
        </p>

        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <button
            aria-label="Facebook"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105"
          >
            Facebook
          </button>
          <button
            aria-label="Instagram"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105"
          >
            Instagram
          </button>
          <button
            aria-label="Snapchat"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105"
          >
            Snapchat
          </button>
          <a
            href="mailto:beautysalon@email.com"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105 inline-block"
          >
            Email
          </a>
          <a
            href="tel:+212600000000"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105 inline-block"
          >
            Phone
          </a>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm">
            © 2026 Beauty Salon · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
