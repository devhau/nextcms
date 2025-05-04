import { Locale } from "~/i18n/routing";
import { create } from "zustand";
import { getUserLocale, setUserLocale } from "~/i18n/cookies";

interface LocaleState {
  currentLocale: Locale;
  setCurrentLocale: (locale: Locale) => void;
}

export const useLocaleStore = create<LocaleState>((set) => ({
  // currentLocale: DEFAULT_LOCALE,
  currentLocale: "", //don't change, it will affect the language detection switch judgment
  showLanguageAlert: false,
  browserLang: "",
  setCurrentLocale: (locale) => {
    setUserLocale(locale);
    set(() => ({
      currentLocale: locale,
    }));
  },
}));
