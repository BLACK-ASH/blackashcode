import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html  lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  w-full md:w-[75%] lg:w-[55%] mx-auto bg-base-100 text-base-content`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
