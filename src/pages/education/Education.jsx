import React from 'react';

export const Education = () => {
  const education = [
  {
  degree: 'Master of Commerce (M.Com)',
  institution: '—',
  duration: 'Ongoing',
  description:
    'Pursuing postgraduate studies in Commerce with a focus on deepening subject knowledge and preparing for UGC NET qualification.'
},
{
  degree: 'Bachelor of Commerce (B.Com)',
  institution: '—',
  duration: 'Completed',
  description:
    'Built a strong academic foundation in core commerce subjects including Accountancy, Business Studies, and Economics.'
},

  ];

  return (
    <section className="bg-[#1a1a1a] text-white py-12 px-6" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-purple-400 text-sm mb-2">{edu.institution} • {edu.duration}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
