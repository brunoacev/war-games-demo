"use client";
import { MoreHorizontal, X } from "lucide-react";
import { useState } from "react";
import { NavigationLinks } from "../navigation-links";

export const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return !isOpen ? (
    <div onClick={handleToggle} className="hover:cursor-pointer">
      <MoreHorizontal size={22} />
    </div>
  ) : (
    <div onClick={handleToggle} className="hover:cursor-pointer relative">
      <X size={22} />

      <div className="absolute top-10 right-0 p-5 bg-zinc-100 dark:bg-zinc-700 rounded-md">
        <NavigationLinks />
      </div>
    </div>
  );
};
