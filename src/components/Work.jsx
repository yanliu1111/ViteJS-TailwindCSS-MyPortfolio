import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: '2024',
    title: 'Instructor, University of Calgary',
    duration: 'September 2024 -  present',
    details:
      'Co-teaching “AI Essentials- Building Fluency and Productivity with Modern AI Tools” course, funded by Microsoft. Teach the Relational Databases Fundamentals course, guiding students through core concepts and practical applications. Collaborate with co-instructors, department directors, and program coordinators for course planning and communication.',
  },
  {
    year: '2023',
    title: 'Software Developer, PayShepherd',
    duration: 'July 2023 -  January 2025',
    details:
      'Custom software development solutions, create REST-based APIs to integrate solutions third parties, PHPUnit or similar testing framework etc. The techincal skills I am using are: PHP, Javascript, CSS, HTML, MySQL, Docker, Google Cloud Platform.',
  },
  {
    year: '2023',
    title: 'Full Stack Developer, New Idea Machine',
    duration: 'March 2023 - July 2023',
    details:
      'The mobile application being developed has a primary objective of enhancing the learning process through the utilization of AI. The techincal skills I was using are: React Native(Expo), JavaScript, FastAPI, PostgreSQL, OpenAI, Supabase-Auth, JWT.',
  },
  {
    year: '2022',
    title: 'Full Stack Developer, InceptionU Ltd.',
    duration: 'Aug 2022 - Mar 2023',
    details:
      'Completed an accelerated software engineering program with an emphasis on full-stack web development. Learned computer science fundamentals and industry best practices through lecture and pair-programming exercises. I also learned about the Agile software development process and how to work in a team environment. I am working on three projects, the techincal skills I was using are: JavaScript, Python, HTML&CSS, React, React Native, ViteJS, NextJS, Git, NodeJS, ExpressJS, Rest API, MS SQL, Firebase, MongoDB, Tailwind CSS, MUI, Bootstrap, and more.',
  },
  {
    year: '2020',
    title:
      'Research Assistant, Pathology and Laboratory Medicine, Cumming School of Medicine, University of Calgary',
    duration: 'Nov 2020 - Dec 2021',
    details:
      'Responsible for performing a range of research and coordination tasks in support of the pandemic disease research projects. Develop and implement original experiments within the guidelines of the research. Work with large datasets for experimental analysis (microarray, sequencing, mass-spectrometry). Work on bioinformatics analysis in Next Generation Sequencing. Performs data management and data cleaning when required. Conduct basic data analysis of study findings using statistical software in support of the research project. Data collection and assisting with interpretation and analysis of data collected.',
  },
  {
    year: '2020',
    title: 'Data Analyst, FundPage Inc.',
    duration: 'May 2020 - Nov 2020',
    details:
      'Projects: Providing customers dynamic online investment reports with data collection, analysis, suggestions; support the business project for enhancing the current data platform; with modern technologies to provide the customers a more valuable, reliable, powerful and efficient fund investment service. Applications I used are: SQL server, SSDT, Python, PowerBI, Tableau.',
  },
  {
    year: '2018',
    title:
      'Optical Imaging Analyst, Live Cell Imaging Laboratory, Snyder Institute for Chronic Disease, University of Calgary',
    duration: 'Apr 2018 – Aug 2019',
    details:
      'Created batch code for 3D segmentation, maximum intensity projection (MIP) particle analysis and exported of data; used machine learning (Google Cloud AI) to distinguish the endothelial cells in 3 conditions. Developed the clustering and segmentation analysis for 3D stack of optical imaging data using MATLAB and Python. Provided tutorials on imaging data collection and research recommendations on analysis software such as ImageJ (FIJI), Bitplane IMARIS, Volocity and Huygens Deconvolution. Worked in and organized the projects interfacing frequently across various research groups, such as working in Agriculture and Agri-Food Canada project and cooperating with Bioengineering group. Strengthened the skills in database management skills and database system performance with SQL server.',
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl:20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          // projectOne={item.projectOne}
          // projectTwo={item.projectTwo}
          // projectThree={item.projectThree}
        />
      ))}
    </div>
  );
};

export default Work;
