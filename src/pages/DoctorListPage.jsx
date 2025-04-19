import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { doctors } from '../data';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';

const DoctorListPage = () => {
  const location = useLocation();
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  
  // Get category from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    
    if (category) {
      const filtered = doctors.filter(doctor => 
        doctor.specialty.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  }, [location.search]);
  
  return (
    <div className="container mx-auto px-4 pt-6 pb-20">
      {/* Back button and title */}
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-xl font-semibold">Doctor List</h1>
        <button className="ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
      
      {/* Search bar */}
      <div className="mb-6">
        <SearchBar placeholder="Search a doctor" />
      </div>
      
      {/* Doctor list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} showAppointmentButton={true} />
        ))}
      </div>
      
      {filteredDoctors.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No doctors found</p>
        </div>
      )}
    </div>
  );
};

export default DoctorListPage;
