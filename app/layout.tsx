import "./globals.css";
import { Archivo, Fredoka } from "next/font/google";
import { Metadata } from "next";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Easy House",
  description: "Open the doors to easy house",
  icons: {
    icon: "/favicon.ico", // /app/icon.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${fredoka.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col items-center">
        <div className="w-full">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
