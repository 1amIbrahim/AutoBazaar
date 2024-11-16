import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className='mr-auto'>
            <a href='/autobazaar/src/Home'  className="text-gray-100 font-bold text-2xl font-display " >AutoBazaar</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-200 hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium font-display">Home</a>
            <a href="/autobazaar/src/Vehicle" className="text-gray-200 hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium font-display">About</a>
            <a href="/autobazaar/src/Dealership" className="text-gray-200 hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium font-display">Dealerships</a>
            <a href="#" className="text-gray-200 hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium font-display">Contact</a>
            <a href="/autobazaar/src/Register" className="text-gray-200 hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium font-display">Register</a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-200 hover:text-gray-400 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-1">
            <a href="#" className="block text-gray-200 hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="block text-gray-200 hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="block text-gray-200 hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" className="block text-gray-200 hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
