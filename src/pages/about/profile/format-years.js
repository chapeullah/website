export function formatYears(value, language, options = {}) {
  const { plus = false } = options;

  const yearWords = {
    ru: {
      one: "год",
      few: "года",
      many: "лет",
      other: "года",
    },

    en: {
      one: "year",
      other: "years",
    },
  };

  const words = yearWords[language] ?? yearWords.en;

  const pluralCategory = Number.isInteger(value)
    ? new Intl.PluralRules(language).select(value)
    : "other";

  const formattedValue = String(value).replace(
    ".",
    language === "ru" ? "," : "."
  );

  return `${formattedValue}${plus ? "+" : ""} ${
    words[pluralCategory] ?? words.other
  }`;
}