import './contacts-page.css';

import ContactCard from '@pages/contacts/contact-card.jsx';

import TelegramLogoOriginal from '@logos/telegram/telegram-logo-original.jsx';
import GmailLogo from '@logos/gmail/gmail-logo.jsx';
import GitHubLogoOriginal from '@logos/github/github-logo-original.jsx';


const telegram = {
  id: "telegram",
  name: "Telegram",
  value: "@chupapodev",
  description: "Some telegram description Some telegram description Some telegram description Some telegram description Some telegram description",
  href: "https://t.me/chupapodev/",
  Icon: TelegramLogoOriginal,
};

const email = {
  id: "email",
  name: "Gmail",
  value: "chapeullah@gmail.com",
  description: "Some telegram description Some telegram description Some telegram description Some telegram description Some telegram description",
  href: "mailto:chapeullah@gmail.com",
  Icon: GmailLogo,
};

const github = {
  id: "github",
  name: "GitHub",
  value: "chapeullah",
  description: "Some telegram description Some telegram description Some telegram description Some telegram description Some telegram description",
  href: "https://github.com/chapeullah/",
  Icon: GitHubLogoOriginal,
};

export default function ContactsPage() {
  return (
    <main className="contacts-page">
      <h1 className={"contacts-page__title"}>Contacts</h1>
      <section className={"contacts-page__contacts"}>
        <ContactCard contact={telegram} />
        <ContactCard contact={email} />
        <ContactCard contact={github} />
      </section>
    </main>
  );
}