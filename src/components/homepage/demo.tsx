"use client";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import YouTube from "react-youtube";

export const Demo = () => {
  const videoId = "ueV_S5If9fk";
  const { height, width } = useWindowDimensions();

  let heightVariavel = height;

  if (width < 500) {
    heightVariavel -= 300;
  }

  const opts = {
    height: heightVariavel - 100,
    width: width - 100,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="flex flex-col gap-4  w-full  h-fit items-center pt-5 pb-20  border-b-[1px] border-zinc-300 dark:border-zinc-600">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="tracking-widest uppercase font-semibold text-zinc-400 dark:text-zinc-600">
          Demo
        </h2>
        <h3 className="tracking-wider font-medium">Veja em Ação</h3>
      </div>

      <YouTube videoId={videoId} opts={opts} />
    </section>
  );
};
