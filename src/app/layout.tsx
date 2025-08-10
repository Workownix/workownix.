// app/layout.tsx

import Footer from "./components/Footer";
import Header from "./components/Header";
import PageWrapper from "./components/pageWrapper";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "  WORKOWNIX",
  description: "Elegant and responsive site by Aatfa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-black text-white font-sans">
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
