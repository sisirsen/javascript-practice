
   
function Navbar() {
  return (
    
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-2xl font-bold tracking-wide">
        Pluvia
      </h1>

      {/* Menu */}
      <ul className="flex gap-6 text-lg">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">Weather</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
      </ul>

      {/* Button */}
      <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Login
      </button>

    </nav>
  )
}

export default Navbar;