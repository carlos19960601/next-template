"use server";

import { type Locale, defaultLocale } from "@/i18n/config";
import { cookies } from "next/headers";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getLocale() {
  const cookieStore = await cookies();
  const locale = cookieStore.get(COOKIE_NAME)?.value || defaultLocale;
  return locale as Locale;
}

export async function setLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}
