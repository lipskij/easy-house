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
  title: "My Website",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${fredoka.variable}`}>
      <body className="min-h-screen flex flex-col items-center">
        <div className="w-full">
          {/* <Navigation /> */}
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
