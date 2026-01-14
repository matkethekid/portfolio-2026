"use client";
import { useState, useEffect } from "react";

export default function FooterGetTime() {
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    
    const dayName = now.toLocaleDateString("en-US", { weekday: 'short', timeZone: "Europe/Belgrade" });
    const dayNum = now.toLocaleDateString("en-US", { day: '2-digit', timeZone: "Europe/Belgrade" });
    const monthName = now.toLocaleDateString("en-US", { month: 'short', timeZone: "Europe/Belgrade" });
    const time = now.toLocaleTimeString("en-US", { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false, 
      timeZone: "Europe/Belgrade" 
    });

    setDateStr(`${dayName} ${dayNum} ${monthName} / ${time}`);
  }, []);

  if (!dateStr) return <span className="opacity-0">Loading...</span>;

  return <span>{dateStr}</span>;
}

export function GetCurrentYear() {
    const [currentYear, setCurrentYear] = useState<number>(0);
    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();

        setCurrentYear(year);
    }, []);

    if (!currentYear) return <span className="opacity-0">Loading...</span>;

    return <span>{currentYear}</span>;
}