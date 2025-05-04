"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import {
  Locale,
  LOCALE_NAMES,
  routing,
  //   usePathname,
  //   useRouter,
} from "~/i18n/routing";
import { useLocaleStore } from "~/i18n/store";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
// import { useParams } from "next/navigation";
import { useEffect, useTransition } from "react";

export default function LocaleSwitcher() {
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const params = useParams();
  const locale = useLocale();
  const { currentLocale, setCurrentLocale } = useLocaleStore();
  //   const [, startTransition] = useTransition();

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale, setCurrentLocale]);

  function onSelectChange(nextLocale: Locale) {
    setCurrentLocale(nextLocale);

    // startTransition(() => {
    //   router.replace(
    //     // @ts-expect-error -- TypeScript will validate that only known `params`
    //     // are used in combination with a given `pathname`. Since the two will
    //     // always match for the current route, we can skip runtime checks.
    //     // { pathname: "/", params: params || {} }, // if your want to redirect to the home page
    //     { pathname, params: params || {} }, // if your want to redirect to the current page
    //     { locale: nextLocale }
    //   );
    // });
  }

  return (
    <Select
      defaultValue={locale}
      value={currentLocale}
      onValueChange={onSelectChange}
    >
      <SelectTrigger className="w-fit">
        <Globe className="w-4 h-4 mr-1" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            {LOCALE_NAMES[cur]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
