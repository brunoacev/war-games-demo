import Link from "next/link";
import { Swords } from "lucide-react";

export const Logo = () => {
  return (
    <div>
      <Link
        href={"/"}
        className="font-extrabold uppercase text-md flex items-center gap-1"
      >
        <Swords size={20} />
        <div className="flex items-center gap-0.5">
          <span>War</span>
          <span className="text-red-500">Games</span>
        </div>
      </Link>
    </div>
  );
};
