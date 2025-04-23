import { Link } from 'react-router-dom';
import { user } from '../data';

const EhrPage = () => {
  const ehrSections = [
    {
      id: 1,
      title: 'Medical History',
      description: 'Diagnoses, treatments, and test results',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: '#E2F4FF'
    },
    {
      id: 2,
      title: 'Medications',
      description: 'Current and past medications, including dosages and allergies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: '#FFE2E6'
    },
    {
      id: 3,
      title: 'Test Results',
      description: 'Laboratory and imaging results',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: '#E5E9FF'
    },
    {
      id: 4,
      title: 'Immunization Records',
      description: 'Vaccination history',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      color: '#FFF6E2'
    },
    {
      id: 5,
      title: 'Prescriptions',
      description: 'Healthcare provider notes on patient care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: '#F0E6FF'
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-6 pb-20">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-xl font-semibold">My Electronic Health Records</h1>
      </div>

      {/* User Profile Card */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
            <img 
              src={user.image} 
              alt={user.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${user.name}&background=random`;
              }}
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">Patient ID: CG-{Math.floor(10000 + Math.random() * 90000)}</p>
            <div className="flex items-center mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-xs text-green-600">Records up to date</span>
            </div>
          </div>
        </div>
      </div>

      {/* EHR Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ehrSections.map(section => (
          <div 
            key={section.id} 
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            style={{ borderLeft: `4px solid ${section.color}` }}
          >
            <div className="flex items-start">
              <div 
                className="p-3 rounded-lg mr-4" 
                style={{ backgroundColor: `${section.color}30` }}
              >
                {section.icon}
              </div>
              <div>
                <h3 className="font-semibold">{section.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{section.description}</p>
              </div>
              <div className="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-50 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Medical Report Added</h3>
                <p className="text-xs text-gray-500">Annual checkup results from Dr. Alisa Dewali</p>
              </div>
              <span className="ml-auto text-xs text-gray-500">2 days ago</span>
            </div>
          </div>
          
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-50 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Prescription Updated</h3>
                <p className="text-xs text-gray-500">Medication dosage adjusted by Dr. Shakib Khan</p>
              </div>
              <span className="ml-auto text-xs text-gray-500">1 week ago</span>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-purple-50 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Vaccination Record</h3>
                <p className="text-xs text-gray-500">COVID-19 booster shot administered</p>
              </div>
              <span className="ml-auto text-xs text-gray-500">2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EhrPage;
