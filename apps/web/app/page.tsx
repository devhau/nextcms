import { ModeToggle } from "@repo/ui/components/mode-toggle";
import { Button } from "@repo/ui/components/ui/button";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "~/components/LocaleSwitcher";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <Button>Hello</Button>
      <LocaleSwitcher />
      <h1 className="text-2xl font-bold">{t("demo")}</h1>
      <ModeToggle />
    </div>
  );
}
