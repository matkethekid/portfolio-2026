"use client";
import { MoveUp } from "lucide-react";

export default function FooterScrollButton() {
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    hero?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={scrollToHero} className="cursor-pointer" aria-label="Move up to beginning">
      <MoveUp />
    </button>
  );
}