import React from 'react';

const projects = [
  { name: 'To Be Added', description: 'desc.', githubUrl: 'https://github.com/user/project-a' }
];

const ProjectList = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">All Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.name} className="bg-tertiary p-4 rounded-s shadow-md">
            <h2 className="text-lg font-medium">{project.name}</h2>
            <p className="text-sm mt-2">{project.description}</p>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mt-2 inline-block"
              >
                &#128279; Github
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
