// src/components/ProjectsSection.tsx

import Image from 'next/image';

const ProjectsSection = () => {
    return (
      <section className="section projects">
        <h2 className="section-title">Our Projects</h2>
        <div>
          {/* Add project items here */}
          <div className="project-item">
            <img src="/Rectangle-8.png" alt="Project 1" width={500} height={500} />
            <h3>Project 1</h3>
          </div>
          <div className="project-item">
            <img src="/Rectangle-9.png" alt="Project 2" width={500} height={500}/>
            <h3>Project 2</h3>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;
  