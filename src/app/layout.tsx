import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Roboto, Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { TranslationProvider } from "@/context/TranslationContext";
import { AppProvider } from "@/context/AppContext";
import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";


// const openSans = Open_Sans({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-open-sans",
// });

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-roboto",
});

const geistMono = Geist_Mono({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Book Haven",
    template: "%s | Book Haven"
  },
  description: "online book store website contains free books and paid books, you can also read books online and write your notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`text-dark-black dark:text-silver-very-light ${inter.variable}`}
      >
        <AppProvider>
          <TranslationProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <NavBar />
              {children}
            </ThemeProvider>
          </TranslationProvider>
        </AppProvider>
      </body>
    </html>
  );
}
