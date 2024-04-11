"use client";

import { useEffect, useState } from "react";

export const useMusicInfo = () => {
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    const handleStorageChange = () => {
      console.log("storage changed");
      
      const storedLanguages = localStorage.getItem("sacred-music-languages");
      if (!storedLanguages) {
        setLanguages(["hindi", "english"]);
        localStorage.setItem("sacred-music-languages", JSON.stringify(["hindi", "english"]));
      } else {
        setLanguages(JSON.parse(storedLanguages));
      }
    }

    handleStorageChange(); // Initial call to set languages
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return { languages };
};