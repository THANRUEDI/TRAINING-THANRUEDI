import React from 'react'
import logo from "../assets/react.svg"

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center ml-10">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg">Soi5 Shop</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><a href="#" className="text-white hover:text-green-400">Home</a></li>
        <li><a href="#" className="text-white hover:text-green-400">About</a></li>
        <li><a href="#" className="text-white hover:text-green-400">Products</a></li>   

        <li><a href="#" className="text-white hover:text-green-400">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar