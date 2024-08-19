import { useState } from 'react';

type LanguageType = {
    [key: string]: string
}

function translate(language: LanguageType, key: string, ...args: string[]) {
    if (language && language[key]) {
        return language[key].replace(/%s/g, () => (args.shift() || ""));
    }
    return key
}

export function useLocalization(defaultLanguage?: LanguageType) {
    const [language, setLanguage] = useState<LanguageType>(defaultLanguage !== undefined ? defaultLanguage : {});
    return {
        translate: (key: string, ...args: string[]) => translate(language, key, ...args),
        setLanguage: (newLanguage: LanguageType) => setLanguage(newLanguage)
    }
}