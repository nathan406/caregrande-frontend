import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-4 fixed bottom-0 w-full shadow-md z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Copyright text - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block">
            <div className="text-sm font-medium text-gray-600">
              <span className="mr-1">©</span>
              <span>{new Date().getFullYear()} CareGrande. All rights reserved.</span>
            </div>
          </div>

          {/* Navigation icons - centered on mobile, right-aligned on larger screens */}
          <div className="flex justify-around w-full md:w-auto md:gap-8">
            <Link to="/" className="flex flex-col items-center group">
              <div className="p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xs mt-1 group-hover:text-blue-500">Home</span>
            </Link>

            <Link to="/ehr" className="flex flex-col items-center group">
              <div className="p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-xs mt-1 group-hover:text-blue-500">My EHR</span>
            </Link>

            <Link to="#" className="flex flex-col items-center group">
              <div className="p-1.5 rounded-full bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-xs mt-1 text-blue-500">Appointments</span>
            </Link>

            <Link to="#" className="flex flex-col items-center group">
              <div className="p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="text-xs mt-1 group-hover:text-blue-500">Messages</span>
            </Link>

            <Link to="#" className="flex flex-col items-center group">
              <div className="p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-xs mt-1 group-hover:text-blue-500">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
