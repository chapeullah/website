import './technologies.css';

import { useLanguage } from "@i18n/use-language.js";
import { technologyItems } from './technology-items.js';
import Divider from '@ui/divider/divider.jsx';

export default function Technologies() {
  const { t } = useLanguage();
  const technologiesTexts = t.homepage.about.technologies;

  const listTechnologies = technologyItems.map((group) => (
      <li className="technologies__group" key={group.title}>
        <div className="technologies__group-content">
          <h3 className="technologies__group-title">
            {group.title}
          </h3>

          <ul className="technologies__list">
            {group.items.map(({ name, Icon }) => (
              <li className="card technologies__card" key={name}>
                <Icon className="technologies__card-icon" />
                <span className="technologies__card-label">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    ));

  return (
    <section className="technologies">
      <span className="header-chip">Technologies</span>
      <h3 className="section-layout__title">
        Технологии с которыми я работаю.
      </h3>
      <p className="section-layout__description">
        Использую этот стек для разработки прикладных систем: от серверной логики
        и баз данных до интерфейсов, интеграций, тестирования и развёртывания.
      </p>
      <Divider className='technologies__divider' />
      <div className="technologies__content">
        <ol className="technologies__groups">
          {listTechnologies}
        </ol>
      </div>
    </section>
  );
}