import type { Metadata } from "next";
import { Roboto, Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FinalTry Innovations",
  description: "An innovative software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={barlow.className}>
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
        <ScrollToTop />
        <Toaster richColors={true} />
      </body>
    </html>
  );
}
