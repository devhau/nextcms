import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
export const LOCALE_NAMES: Record<string, string> = {
  "en-US": "English",
  "zh-CN": "中文",
  "ja-JP": "日本語",
  "fr-FR": "Français",
  "de-DE": "Deutsch",
  "es-ES": "Español",
  "ru-RU": "Русский",
  "ko-KR": "한국어",
  "pt-PT": "Português",
  "it-IT": "Italiano",
  "ar-SA": "العربية",
  "hi-IN": "हिन्दी",
  "th-TH": "ไทย",
  "vi-VN": "Tiếng Việt",
  "pl-PL": "Polski",
  "nl-NL": "Nederlands",
  "tr-TR": "Türkçe",
  "sv-SE": "Svenska",
  "da-DK": "Dansk",
  "fi-FI": "Suomi",
  "no-NO": "Norsk",
  "hu-HU": "Magyar",
  "cs-CZ": "Čeština",
  "ro-RO": "Română",
  "sk-SK": "Slovenčina",
  "bg-BG": "Български",
  "lt-LT": "Lietuvių",
  "lv-LV": "Latviešu",
  "sl-SI": "Slovenščina",
  "et-EE": "Eesti",
  "is-IS": "Íslenska",
  "mt-MT": "Malti",
};
export const DEFAULT_LOCALE = "en-US";
export const LOCALES = Object.keys(
  LOCALE_NAMES
) as (keyof typeof LOCALE_NAMES)[];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,

  // auto detect locale
  localeDetection: false,

  localePrefix: "as-needed",
  localeCookie: true,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type Locale = (typeof routing.locales)[number];
