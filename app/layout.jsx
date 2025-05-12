import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Top Web & App Development Company | Custom Solutions",
  description: "KineticDrive is a leading software company specializing in tailored web and mobile app development, UI/UX design, and digital solutions to help your business grow.",
  keywords: [
    "KineticDrive",
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Software Company India",
    "SEO Services",
    "Digital Marketing",
    "Custom Web Applications",
    "Mobile App Development",
    "React Developer",
    "Flutter Developer",
    "Next.js Developer",
    "Tech Solutions",
    "Startup Solutions",
    "IT Services Allahabad"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
