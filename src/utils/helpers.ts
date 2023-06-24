import dictionary from "@/assets/translations/ru.json";

export function capitalize(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}

const dictionaries = {
    ru: dictionary,
};

type Locale = keyof typeof dictionaries;
export const getDictionary = (locale: Locale) => dictionaries[locale];
