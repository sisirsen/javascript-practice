function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 mt-10">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold">Pluvia</h1>

        {/* Links */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Weather</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
        </ul>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Pluvia. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;