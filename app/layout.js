import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Portfolio | Full Stack Developer",
  description:
    "Professional portfolio showcasing web development projects, certifications, and technical blog posts.",
  keywords: ["web development", "full stack", "portfolio", "projects", "blog"],
  openGraph: {
    title: "Your Portfolio | Full Stack Developer",
    description:
      "Professional portfolio showcasing web development projects, certifications, and technical blog posts.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Portfolio | Full Stack Developer",
    description:
      "Professional portfolio showcasing web development projects, certifications, and technical blog posts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {/* Grid Background - Full Page */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 grid grid-cols-24 grid-rows-24">
            {Array.from({ length: 24 }).map((_, row) =>
              Array.from({ length: 24 }).map((_, col) => (
                <div key={`${row}-${col}`} className="relative group">
                  {/* Vertical Line */}
                  <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-base-content/10 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(var(--primary),0.5)] dark:group-hover:bg-secondary dark:group-hover:shadow-[0_0_10px_rgba(var(--secondary),0.5)] transition-all duration-300" />
                  {/* Horizontal Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-base-content/10 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(var(--primary),0.5)] dark:group-hover:bg-secondary dark:group-hover:shadow-[0_0_10px_rgba(var(--secondary),0.5)] transition-all duration-300" />
                </div>
              ))
            )}
          </div>
        </div>

        <Navbar />
        <main className="min-h-screen pt-16 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
