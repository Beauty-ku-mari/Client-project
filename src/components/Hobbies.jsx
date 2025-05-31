
import React from 'react';

const hobbies = [
  {
    title: 'Travelling',
    description:
      'I enjoy exploring new places, cultures, and communities, which broadens my perspective and enhances my adaptability and social skills. My travels across India have taught me practical problem-solving, planning, and time management, as well as deepened my understanding of socio-economic structures.',
  },
  {
    title: 'Teaching & Mentoring',
    description:
      'Sharing knowledge with students, especially in Commerce subjects, is both a passion and a fulfilling experience. It enhances my communication skills and classroom presence.',
  },
  {
    title: 'Reading',
    description:
      'I regularly read books, newspapers, and online articles on commerce, current affairs, and personal development to stay informed and inspired.',
  },
  {
    title: 'Technology & Digital Skills',
    description:
      'I enjoy learning new software tools, improving my IT skills, and staying updated with digital trends that support my teaching and administrative work.',
  },
  {
    title: 'Writing & Note-making',
    description:
      'I love creating organized study notes and teaching materials, which helps me retain concepts and supports my UGC NET preparation.',
  },
];

const Hobbies = () => {
  return (
    <section className="bg-[#1a1a1a] text-white  py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
              <p className="text-white">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
