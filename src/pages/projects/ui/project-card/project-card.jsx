import './project-card.css';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
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
      <nav className="project-card__menu"></nav>
      <div className="project-card__body">
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__meta">
          <span className="">Released on {project.releaseDate}</span>
        </div>
      </div>
    </article>
  );
}