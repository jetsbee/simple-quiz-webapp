import type { Metadata } from "next";
import { Providers } from "./(providers)";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Quiz App",
  description: "Simple quiz app with Trivia API.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
