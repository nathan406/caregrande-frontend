import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { user } from '../data';

const Navbar = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const moreMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setShowMoreMenu(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setShowMobileMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [moreMenuRef, mobileMenuRef]);
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CareGrande
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600">Appointments</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600">Messages</Link>
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
              >
                More
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showMoreMenu ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showMoreMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Account Settings
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Payment
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    About CareGrande
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    FAQ
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search and Notification buttons - visible on all devices */}
            <button className="p-2 rounded-full bg-gray-100 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-100 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* User profile - visible on all devices */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img src={user.image} alt={user.name} className="w-full h-full object-cover" onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=' + user.name;
                }} />
              </div>
              <span className="hidden md:block text-sm font-medium">Hi, {user.name}</span>
            </div>

            {/* Hamburger menu - only visible on mobile */}
            <button
              className="md:hidden p-2 rounded-full bg-gray-100 text-gray-600"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-20 border-t border-gray-100"
          ref={mobileMenuRef}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">Home</Link>
              <Link to="/doctors" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">Doctors</Link>
              <Link to="#" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">Appointments</Link>
              <Link to="#" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">Messages</Link>
              <Link to="/ehr" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">My EHR</Link>

              <div className="border-t border-gray-100 my-2 pt-2">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">More Options</h3>
              </div>

              <Link to="#" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">Account Settings</Link>
              <Link to="#" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">Payment</Link>
              <Link to="#" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">Blog</Link>
              <Link to="#" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">About CareGrande</Link>
              <Link to="#" className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">FAQ</Link>

              <button className="py-2 px-4 text-red-600 hover:bg-red-50 rounded-lg text-left">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
