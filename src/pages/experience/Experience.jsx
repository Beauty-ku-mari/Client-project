import React from 'react';

export const Experience = () => {
  const experiences = [
   {
  role: 'Panchayat Secretary',
  organization: 'Local Administrative Body',
  description:
    'Handled administrative responsibilities, documentation, and public service delivery at the grassroots level, developing strong organizational and communication skills.'
},
{
  role: 'Commerce Teacher (Class 11 & 12)',
  organization: 'Senior Secondary School',
  description:
    'Taught subjects such as Accountancy, Business Studies, and Economics, improving classroom management, subject expertise, and student engagement.'
},
{
  role: 'IT & Office Support',
  organization: 'Self / Various Roles',
  description:
    'Applied IT skills including MS Office, data entry, and troubleshooting to support administrative and educational activities.'
},
  ];

  return (
    <section className="bg-[#1a1a1a] text-white py-12 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
             
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
