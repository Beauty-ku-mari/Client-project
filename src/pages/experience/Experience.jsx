import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2023 – Present',
      description:
        'Developed modern UI components using React and Tailwind CSS. Collaborated on RESTful API integration and responsive design.',
    },
    {
      role: 'Web Developer Intern',
      company: 'CodeCraft Labs',
      duration: 'Jun 2022 – Dec 2022',
      description:
        'Worked on bug fixes, UI enhancements, and learned version control and agile workflows.',
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
              <p className="text-purple-400 text-sm mb-2">{exp.company} • {exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
