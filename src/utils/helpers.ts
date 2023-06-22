export function capitalize(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}

const dictionaries = {
    ru: () =>
        import("@/assets/translations/ru.json").then(
            (module) => module.default
        ),
};

type Locale = keyof typeof dictionaries;
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
