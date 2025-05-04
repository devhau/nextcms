"use client";
import { ModeToggle } from "@repo/ui/components/mode-toggle";
import { Button } from "@repo/ui/components/ui/button";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "~/components/LocaleSwitcher";
import { api } from "~/trpc/react";

export default function Home() {
  const t = useTranslations("HomePage");
  let { data ,refetch} = api.hello.getMessageHello.useQuery();
  const onBtnClick = () => {
    refetch();
    console.log(data);
    console.log("Hello");
  };
  return (
    <div>
      <Button onClick={onBtnClick}>Hello</Button>
      <LocaleSwitcher />
      <h1 className="text-2xl font-bold">{t("demo")}</h1>
      <ModeToggle />
    </div>
  );
}
