import { navigation } from "@config/navigation.js";

const FooterPageIds = ["home", "projects", "about", "contacts"];

export function getPages(i18n) {
  return FooterPageIds.map((id) => ({
    ...navigation[id],
    name: i18n.pages[id],
  }));
}
