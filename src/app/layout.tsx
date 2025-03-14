import Header from "@/app/_navigation/header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ReactNode } from "react";
import "./globals.css";

const myFont = localFont({
  src: "../../public/fonts/Samim.woff2",
  display: "swap",
});

export const metadata = {
  title: "Medicine shop",
  description: "Online medicine shop",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale || "fa"} dir="rtl" className={myFont.className}>
      <body>
        <NuqsAdapter>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />

            <div className="flex h-screen overflow-hidden border-collapse">
              <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 flex flex-col bg-muted text-muted-foreground">
                {children}
              </main>
            </div>
          </NextIntlClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
