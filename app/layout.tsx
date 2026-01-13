import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";

const vT323 = VT323({
  weight: ["400"],
  subsets: ["latin"]
});

const helveticaNeueHeavy = localFont({
  src: "/fonts/HelveticaNeueHeavy.otf"
});

export const metadata: Metadata = {
  title: "Mateja Stoev - Full-Stack Web Developer",
  description: "Mateja Stoev - Full-Stack Web Developer portfolio",
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
  robots: "index, follow",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1",
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
      <body className={`${helveticaNeueHeavy.className} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
