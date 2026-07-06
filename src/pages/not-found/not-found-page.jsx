import './not-found-page.css';

import GoBackButton from "@ui/go-back-button";
import { useLanguage } from '@i18n/use-language.js';

export default function NotFoundPage() {
  const { t } = useLanguage();
  const i18n = t.notFound;

  return (
    <div className='not-found-page'>
      <div className='not-found-page__container'>
        <span className='not-found-page__label'>404</span>
        <span className='not-found-page__title'>{i18n}</span>
        <GoBackButton />
      </div>
    </div>
  );
}
