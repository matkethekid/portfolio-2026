"use client";
import { MoveUp } from "lucide-react";

export default function FooterScrollButton() {
  const scrollToHero = () => {
    const start = document.getElementById("navbar");
    start?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={scrollToHero} className="cursor-pointer" aria-label="Move up to beginning">
      <MoveUp />
    </button>
  );
}