// Works.jsx
import React from 'react';

const Works = () => {
  // Array of project data
  const projects = [
    {
      title: 'Sales Analysis',
      description: 'Analysis of Sales given dataset.',
      demoLink: '/demo1',
      codeLink: '/code1',
      image: 'path/to/image2.jpg',
    },
    {
      title: 'Marathons - Data Analysis',
      description: 'Analysis of Marathons given dataset.',
      demoLink: '/demo2',
      codeLink: '/code2',
      image: 'path/to/image2.jpg',
    },
    {
      title: 'Python RPG',
      description: 'RPG text-base game, focus on OOP.',
      demoLink: '/demo3',
      codeLink: '/code3',
      image: 'path/to/image3.jpg',
    },
    {
      title: 'ChatBot',
      description: 'Interactive chatbot focus on NLP.',
      demoLink: '/demo4',
      codeLink: '/code4',
      image: 'path/to/image4.jpg',
    },
    {
      title: 'Brian Danielson WebScrape API',
      description: 'API use to analyze Wrestling Matches. Focus on web scraping and Rest API',
      demoLink: '/demo5',
      codeLink: '/code5',
      image: 'path/to/image5.jpg',
    },
    {
      title: 'Machine Learning - Classification Analysis',
      description: 'A brief description of Project Six.',
      demoLink: '/demo6',
      codeLink: '/code6',
      image: 'path/to/image6.jpg',
    },
  ];

  return (
    // Main container with responsive height
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Section header */}
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>Work</p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>

        {/* Project grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover content */}
              <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-white tracking-wider'>{project.title}</span>
                <p className='text-center'>{project.description}</p>
                {/* Action buttons */}
                <div className='pt-8 text-center'>
                  <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
