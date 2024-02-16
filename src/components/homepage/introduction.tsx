import { CheckCheck } from "lucide-react";

export const Introduction = () => {
  return (
    <section className="flex flex-col gap-4 w-full h-fit items-center py-24 border-b-[1px] border-zinc-300 dark:border-zinc-600 ">
      <h1 className="uppercase font-extrabold text-6xl">
        War <span className="text-red-500">Games</span>
      </h1>
      <p className="font-semibold text-md">
        WAR GAMES ONLINE, CLASSIC CABAL AND FREE TO PLAY.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">SERVIDOR DEDICADO BR</span>
          <CheckCheck className="text-green-600 dark:text-green-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">NOVAS FUNCIONALIDADES</span>
          <CheckCheck className="text-green-600 dark:text-green-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">MÉDIO - HARD</span>
          <CheckCheck className="text-green-600 dark:text-green-500" />
        </div>
      </div>
    </section>
  );
};
