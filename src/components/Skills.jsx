// Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    "Data Analysis",
    "Web Development",
    "Object-Oriented Programming",
    "API Integration",
    "Problem Solving",
    "Automation and Scripting",
    "Database Managment",
    "Version Control (Git/GitHub)",
  ];

  const languages = [
    "Python",
    "HTML",
    "CSS",
    "SQL",
    "Bash",
    "C# / C++"
    ];

  const frameworks = [
    "React",
    "Express.js", 
    "Bootstrap",
    "Django",
    "Pandas",
    "Numpy"
  ];

  return (
    // Main container with dark background
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300 py-10'>
      {/* Content wrapper with max width and centering */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        {/* Section Component */}
        <Section title="Skills" description="Here are some of the technologies I've worked with:" data={skills} />
        <Section title="Languages" description="Coding languages I am proficient in:" data={languages} />
        <Section title="Frameworks" description="Frameworks I've used in my projects:" data={frameworks} />
      </div>
    </div>
  );
};

const Section = ({ title, description, data }) => {
  return (
    <div className='mb-10'>
      {/* Header section */}
      <div className='w-full flex justify-center items-center flex-col mb-7'>
        <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
          {title}
        </p>
        <p className='py-4 text-2xl'>{description}</p>
      </div>
      {/* Grid for items */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
        {data.map((item, index) => (
          <div
            key={index}
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
          >
            <p className='my-4'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
