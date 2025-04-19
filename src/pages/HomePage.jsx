import { Link } from 'react-router-dom';
import { doctors, categories, upcomingAppointments } from '../data';
import AppointmentCard from '../components/AppointmentCard';
import CategoryCard from '../components/CategoryCard';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  // Get top doctors (first 4)
  const topDoctors = doctors.slice(0, 4);
  
  return (
    <div className="container mx-auto px-4 pt-6 pb-20">
      {/* Upcoming Schedule Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Upcoming Schedule</h2>
          <Link to="#" className="text-sm text-blue-600">See All</Link>
        </div>
        
        {upcomingAppointments.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {upcomingAppointments.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <p className="text-gray-500">No upcoming appointments</p>
            <Link to="/doctors" className="mt-2 inline-block text-blue-600 font-medium">
              Book an appointment
            </Link>
          </div>
        )}
      </div>
      
      {/* Categories Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Categories</h2>
          <Link to="#" className="text-sm text-blue-600">See All</Link>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      
      {/* Top Doctors Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Top Doctors</h2>
          <Link to="/doctors" className="text-sm text-blue-600">See All</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
