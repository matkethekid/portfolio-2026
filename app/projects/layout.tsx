import React from "react";
import {Metadata, type Viewport} from "next";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Mateja Stoev | Projects",
  description: "Mateja Stoev - Full-stack Web Developer portfolio",
  openGraph: {
    title: "Mateja Stoev | Projects",
    description: "Explore a gallery of scalable web applications and digital solutions built with modern technologies like Next.js, TypeScript, and Node.js. From complex backend architectures to high-performance frontend interfaces, these projects demonstrate my ability to deliver end-to-end full-stack solutions. Each case study focuses on clean code, seamless UI/UX design, and solving real-world business challenges through innovative software engineering.",
    url: "https://matejastoev.dev/projects",
    siteName: "Mateja Stoev Portfolio",
    images: [
      {
        url: "https://cdn.studiozid.rs/heroimg.png",
        width: 1200,
        height: 630,
        alt: "Mateja Stoev - Projects Page"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: "index, follow",
  keywords: [
    "Mateja Stoev",
    "Mateja Stoev portfolio",
    "Full-stack web developer",
    "Frontend developer",
    "Backend developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "Web development services",
    "Contact Mateja Stoev",
    "Hire web developer",
    "Freelance web developer contact",
    "Remote web developer",
    "NestJS developer",
    "NestJS developer Serbia",
    "NestJS developer Srbija",
  ]
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        {children}
      </>
    )
};