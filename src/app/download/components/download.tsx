import Image from "next/image";

export const DownloadSection = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center">
      <Image
        alt="Logo for Windows Operation System"
        src={"/icons-svgs/windows.svg"}
        width={100}
        height={100}
      />
      <h3 className="font-semibold text-3xl tracking-wide">Windows</h3>
      <button className="px-5 py-3 font-semibold tracking-wide w-fit rounded-md flex items-center gap-2  bg-purple-800 text-zinc-50 hover:bg-purple-700 transition-all duration-300 ease-in-out">
        Download
      </button>
    </section>
  );
};
