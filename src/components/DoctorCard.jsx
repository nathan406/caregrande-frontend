import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor, showAppointmentButton = false }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${doctor.name}&background=random`;
              }}
            />
          </div>
          <div className="flex-1">
            <Link to={`/doctors/${doctor.id}`}>
              <h3 className="font-medium text-blue-600">{doctor.name}</h3>
            </Link>
            <p className="text-sm text-gray-500">{doctor.specialty} • {doctor.hospital}</p>
            
            {showAppointmentButton && (
              <div className="mt-3">
                <button className="w-full py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                  Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
