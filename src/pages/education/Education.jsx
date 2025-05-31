import React from 'react';

export const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'MMDU, Haryana',
      duration: '2023 – Present',
      description:
        'Focused on MERN stack, software engineering, and cloud computing.',
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'Government Women\'s Polytechnic, Muzaffarpur',
      duration: '2020 – 2023',
      description:
        'Gained strong foundation in data structures, programming, and networking.',
    },
  ];

  return (
    <section className="bg-[#111] text-white py-12 px-6" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md">
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
