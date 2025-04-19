import { Link } from 'react-router-dom';
import { doctors } from '../data';

const AppointmentCard = ({ appointment }) => {
  const doctor = doctors.find(doc => doc.id === appointment.doctorId);
  
  if (!doctor) return null;
  
  return (
    <div className="bg-blue-500 text-white rounded-xl p-4">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden">
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
          <h3 className="font-medium text-white">{doctor.name}</h3>
          <p className="text-sm text-blue-100">{doctor.specialty}</p>
          
          <div className="flex items-center gap-2 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-blue-100">{appointment.date}</span>
          </div>
        </div>
        
        <Link to={`/doctors/${doctor.id}`} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
          See All
        </Link>
      </div>
    </div>
  );
};

export default AppointmentCard;
