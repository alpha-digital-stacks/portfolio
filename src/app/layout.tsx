import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Talha | Full-Stack Developer (React, Next.js, Node.js)",
  description:
    "Muhammad Talha is a Full-Stack Developer specializing in React.js, Next.js, Node.js, and React Native. Experienced in building scalable web and mobile applications, real-time systems, and modern UI/UX designs.",
  keywords: [
    "Muhammad Talha",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "MERN Stack Developer",
    "Frontend Developer Karachi",
  ],
  authors: [{ name: "Muhammad Talha" }],
  creator: "Muhammad Talha",
  openGraph: {
    title: "Muhammad Talha | Full-Stack Developer",
    description:
      "Building scalable web & mobile apps with React, Next.js, Node.js & React Native.",
    url: "https://your-domain.com",
    siteName: "Muhammad Talha Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <div className="fixed right-10 bottom-10 z-50">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
