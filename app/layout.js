import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/Theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BlackAshCode",
  description: "BlackAshCode is a personalize web based code editor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-base-100 text-base-content`}
        >
          <div className="max-sm:px-4 p-0 bg-base-200 z-50">
            <Navbar />
          </div>
          {children}
          <div className="bg-base-300 max-sm:px-4 p-0  border-b-4 border-primary">
            <Footer />
          </div>
          <p className="text-center text-sm p-3">Copyright © 2024 - All right reserved by Blackash </p>
        </body>
      </ThemeProvider>
    </html>
  );
}
