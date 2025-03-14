import Header from "@/app/_navigation/header";
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={myFont.className}>
      <body>
        <NuqsAdapter>
          <Header />

          <div className="flex h-screen overflow-hidden border-collapse ">
            <main className="min-h-screen flex-1 overflow-y-auto  overflow-x-hidden  py-24 px-8 flex flex-col bg-muted text-muted-foreground">
              {children}
            </main>
          </div>
        </NuqsAdapter>
      </body>
    </html>
  );
}
