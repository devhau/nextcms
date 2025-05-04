import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { getUserLocale } from "./cookies";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  // const locale = await requestLocale;

  // from the cookies
  const locale = await getUserLocale();

  try {
    // Ensure that a valid locale is used
    if (locale && routing.locales.includes(locale)) {
      return {
        locale,
        messages: (await import(`./messages/${locale}.ts`)).default,
      };
    }
  } catch (e) {
    console.error("Error loading locale messages:", e);
  }
  return {
    locale: routing.defaultLocale,
    messages: (await import(`./messages/${routing.defaultLocale}.ts`)).default,
  };
});
