import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Inter } from "next/font/google";
import type { Viewport } from "next";

const inter = Inter({
  weight: ["900"],
  subsets: ["latin"]
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Mateja Stoev - Full-Stack Web Developer",
  description: "Mateja Stoev - Full-Stack Web Developer portfolio",
  metadataBase: new URL("https://matejastoev.dev"),
  openGraph: {
    title: "Mateja Stoev - Full-Stack Web Developer",
    description: "Full-stack web developer from Serbia",
    url: "https://matejastoev.dev",
    siteName: "Mateja Stoev Portfolio",
    images: [
      {
        url: "https://matejastoev.dev/matejaembed.png",
        width: 1200,
        height: 800,
        alt: "Mateja Stoev - Landing Page"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  keywords: [
    "Mateja Stoev",
    "Mateja Stoev portfolio",
    "Full-stack web developer",
    "Full-Stack web developer",
    "Fullstack web developer",
    "fullstack web developer",
    "Full-Stack Web Developer Serbia",
    "Full-Stack Web Developer",
    "Full-Stack Web Developer Srbija",
    "Frontend developer",
    "Backend developer",
    "React developer",
    "TypeScript developer",
    "Next.js developer",
    "JavaScript developer",
    "Web development services",
    "Contact Mateja Stoev",
    "Hire web developer",
    "Freelance web developer contact",
    "Remote web developer"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
