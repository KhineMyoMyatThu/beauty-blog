import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="bg-white shadow-md relative">
      <div className="flex items-center justify-between p-3 max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
          <h2 className="text-xl font-bold text-pink-500">BeautyBlog</h2>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <nav className="md:flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
            <Link to="/beauty" className="text-gray-700 hover:text-pink-500">Beauty</Link>
            <Link to="/skincare" className="text-gray-700 hover:text-pink-500">Skincare</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-500">About</Link>
            <Link to="/write" className="text-gray-700 hover:text-pink-500">Write</Link>
          </nav>
          <form className="flex items-center rounded-md px-2 py-1 border-2 border-pink-300">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-40 md:w-40"
            />
            <button type="submit" className="ml-2 text-sm text-gray-600 hover:text-pink-500">
              <Search className="w-4 h-4" />
            </button>
          </form>
          <button className="text-sm bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600">Logout</button>
        </div>

        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}>
          {isMenuOpen ? 
          <X className="w-5 h-5" /> : 
          <Menu className="w-5 h-5" />}
        </button>

      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200 bg-white`}>
        <nav className="flex flex-col gap-2 p-4">
          <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
          <Link to="/beauty" className="text-gray-700 hover:text-pink-500">Beauty</Link>
          <Link to="/skincare" className="text-gray-700 hover:text-pink-500">Skincare</Link>
          <Link to="/about" className="text-gray-700 hover:text-pink-500">About</Link>
          <Link to="/write" className="text-gray-700 hover:text-pink-500">Write</Link>
          <form className="flex items-center rounded-md border border-pink-200 bg-gray-50 px-3 py-2 mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
            <button type="submit" className="ml-2 text-gray-600 hover:text-pink-500">
              <Search className="w-4 h-4" />
            </button>
          </form>
          <button className="w-full text-left text-sm bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-600 mt-2">
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;