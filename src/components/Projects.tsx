import React from "react";

const projects = [
    {
        name: 'Media Analysis Website',
        link: "link tbd",
        image: 'construction.png',
        field: 'Web Development',
        updated: 'Months Ago',
        updatedDateTime: '2024-01-1T01:01Z'
    }
]

export default function Projects() {
    return (
      <div className="w-full h-full relative pt-20">
          <ul className="divide-y divide-gray-100">
          {projects.map((project) => (
            <li key={project.name} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img alt="construction" src={process.env.PUBLIC_URL + `assets/images/${project.image}`} className="h-12 w-12 flex-none" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold text-gray-900">{project.name}</p>
                  <p className="text-sm/6 font-semibold text-gray-900">{project.link}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm/6 text-gray-900">{project.field}</p>
                {project.updated ? (
                  <p className="mt-1 text-xs/5 text-gray-500">
                    Updated <time dateTime={project.updatedDateTime}>{project.updated}</time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs/5 text-gray-500">Online</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div> 
    )
  }