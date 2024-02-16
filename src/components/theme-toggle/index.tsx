"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return theme !== "dark" && hasMounted ? (
    <button
      onClick={() => setTheme("dark")}
      className="px-2 py-1 hover:cursor-pointer"
    >
      <Moon size={17} />
    </button>
  ) : (
    <button
      onClick={() => setTheme("light")}
      className="px-2 py-1 hover:cursor-pointer"
    >
      <Sun size={17} />
    </button>
  );
};
