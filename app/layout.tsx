import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXUS — AI Employees for Ambitious Businesses",
  description: "NEXUS designs custom AI employees and automation systems that eliminate repetitive work and scale revenue.",
  openGraph: { title: "NEXUS AI Automation", description: "Build AI employees that work 24/7.", type: "website" },
  twitter: { card: "summary_large_image", title: "NEXUS AI Automation", description: "Build AI employees that work 24/7." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
