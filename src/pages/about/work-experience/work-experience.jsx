import "./work-experience.css";

import { useLanguage } from "@i18n/use-language.js";
import Divider from "@ui/divider/divider.jsx";

function ExperienceCard({ experience }) {
  return (
    <article className="card experience-card">
      <div className="experience-card__body">
        <header className="experience-card__header">
          <div className="experience-card__main">
            <div className="experience-card__role-row">
              <h3 className="experience-card__role">
                {experience.position}
              </h3>
            </div>

            <p className="experience-card__company">
              {experience.company}
            </p>
          </div>

          <p className="experience-card__period">
            {experience.period}
          </p>
        </header>

        <p className="experience-card__description">
          {experience.description}
        </p>

        <div className="experience-card__section">
          <h4 className="experience-card__section-title">
            {experience.technologiesTitle}
          </h4>

          <ul className="experience-card__technologies">
            {experience.technologies.map((technology) => (
              <li
                className="experience-card__technology"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function WorkExperience() {
  const { t } = useLanguage();
  const i18n = t.workExperienceSection;

  const listWorkExperience = i18n.items.map((experience) => (
    <li
      className="work-experience__item"
      key={experience.id}
    >
      <ExperienceCard experience={experience} />
    </li>
  ));

  return (
    <section className="work-experience">
      <span className="header-chip">{i18n.header.chip}</span>

      <h3 className="section-layout__title">
        {i18n.header.title}
      </h3>

      <p className="section-layout__description">
        {i18n.header.description}
      </p>

      <Divider className="work-experience__divider" />

      <div className="work-experience__content section-layout__split">
        <ul className="work-experience__list section-layout__split-right">
          {listWorkExperience}
        </ul>
      </div>
    </section>
  );
}