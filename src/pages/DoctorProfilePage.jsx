import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors } from '../data';
import Rating from '../components/Rating';

const DoctorProfilePage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [selectedDay, setSelectedDay] = useState(15); // Default to day 15
  
  useEffect(() => {
    const foundDoctor = doctors.find(doc => doc.id === parseInt(id));
    setDoctor(foundDoctor);
  }, [id]);
  
  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Loading doctor information...</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 pt-6 pb-20">
      {/* Back button and actions */}
      <div className="flex items-center mb-6">
        <Link to="/doctors" className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        
        <div className="ml-auto flex items-center gap-4">
          <button className="p-2 rounded-full border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-full border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Doctor profile header */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${doctor.name}&background=random&size=96`;
              }}
            />
          </div>
          
          <h1 className="text-xl font-semibold text-center">{doctor.name}</h1>
          <p className="text-sm text-gray-500 mb-2">{doctor.specialty} • {doctor.hospital}</p>
          
          <Rating value={doctor.rating} reviews={doctor.reviews} size="md" />
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-6 w-full">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">{doctor.patients}</span>
              <span className="text-xs text-gray-500">Patients</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-pink-50 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">{doctor.experience}</span>
              <span className="text-xs text-gray-500">Experience</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-50 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">{doctor.rating}</span>
              <span className="text-xs text-gray-500">Rating</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* About doctor */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">About Doctor</h2>
        <p className="text-gray-600 text-sm">{doctor.about}</p>
        <button className="text-blue-600 text-sm mt-2">See More</button>
      </div>
      
      {/* Working time */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">Working time</h2>
        <p className="text-gray-600 text-sm">{doctor.workingTime}</p>
      </div>
      
      {/* Schedule */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">Schedule</h2>
        
        <div className="grid grid-cols-7 gap-2 mb-6">
          {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
            <div key={index} className="text-center">
              <p className="text-xs text-gray-500 mb-1">{day}</p>
              <button 
                className={`w-full py-2 rounded-lg text-sm ${selectedDay === index + 12 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setSelectedDay(index + 12)}
              >
                {index + 12}
              </button>
            </div>
          ))}
        </div>
        
        <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
