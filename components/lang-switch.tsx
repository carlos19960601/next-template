"use client";

import { setLocale } from "@/i18n";
import { type Locale, locales } from "@/i18n/config";
import { useLocale } from "next-intl";
import { Button } from "./ui";

export default function LangSwitch() {
  const [zh, en] = locales;
  const locale = useLocale();

  const handleChangeLang = (value: Locale) => {
    setLocale(value);
  };

  return (
    <Button
      size="icon"
      onClick={() => handleChangeLang(locale === zh ? en : zh)}
    >
      {locale === zh ? "中" : "EN"}
    </Button>
  );
}
