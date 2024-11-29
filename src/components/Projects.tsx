import React from 'react';

// Static data: projects with names, descriptions, and optional GitHub URLs
const projects = [
  { name: 'To Be Added', description: 'desc.', githubUrl: 'https://github.com/user/project-a' }
];

const ProjectList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">All Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.name} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">{project.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 mt-2 inline-block hover:text-blue-800"
              >
                View on GitHub
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
