import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@repo/ui/components/theme-provider";

import "@repo/ui/globals.css";
import "./globals.css";
import { getLocale } from "next-intl/server";
import { TRPCReactProvider } from "~/trpc/react";
import { console } from "inspector";
import { AuthProvider } from "@repo/common/auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "NextCMS",
  description: "A Next.js CMS",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} className="light" style={{ colorScheme: "light" }}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <NextIntlClientProvider>
            <AuthProvider>
              <TRPCReactProvider>{children}</TRPCReactProvider>
            </AuthProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
