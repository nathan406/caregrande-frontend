import { Link } from 'react-router-dom';
import { user } from '../data';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CareGrande
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600">Appointments</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600">Messages</Link>
          </div>
          
          <div className="flex items-center gap-3">
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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img src={user.image} alt={user.name} className="w-full h-full object-cover" onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=' + user.name;
                }} />
              </div>
              <span className="hidden md:block text-sm font-medium">Hi, {user.name}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
