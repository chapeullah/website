import './project-card.css';

import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [selectedTab, setSelectedTab] = useState("description");

  return (
    <article className="project-card">
      <p className="project-card__eyebrow">
        Personal website
      </p>
      <div className="project-card__header">
        <a
          href={project.owner.link}
          className="project-card__link project-card__repo-owner"
          target="_blank"
          rel="noreferrer noopener"
        >
          {project.owner.name}
        </a>
        {" / "}
        <a
          href={project.link}
          className="project-card__link project-card__repo-name"
          target="_blank"
          rel="noreferrer noopener"
        >
          {project.title}
        </a>
      </div>
      <nav className="project-card__menu">
        <ul className="project-card__tabs">
          <a
            className={
              `project-card__tab ${selectedTab === "description" ? "project-card__tab--selected" : ""}`
            }
            onClick={() => setSelectedTab("description")}
          >
            Description
          </a>
        </ul>
      </nav>
      <div className="project-card__body">
        {selectedTab === "description" && (
          <p className="project-card__description">{project.description}</p>
        )}
        <div className="project-card__meta">
        <span>
          Released on {new Intl.DateTimeFormat('en-US', {
          month: 'long',
          year: 'numeric',
          day: 'numeric',
          timeZone: 'UTC',
        }).format(new Date(project.releaseDate))}
        </span>
        </div>
      </div>
    </article>
  );
}