import Image from "next/image";

export const InProgress = () => {
  return (
    <section className="w-full min-h-full flex flex-col py-10 px-4 gap-4 items-center justify-center">
      <Image
        alt=""
        src={"/icons-svgs/programer.svg"}
        width={200}
        height={200}
        className="w-[200px] md:w-[350px] lg:w-[380px]"
      />

      <div className="flex flex-col gap-2">
        <h2 className="font-semibold tracking-wide text-xl">
          Novidades estão a caminho
        </h2>
        <p className="text-md">
          Olá visitante! Nosso site está passando por uma manuntenção nesse
          momento.
        </p>
        <p className="text-md">
          Por favor, volte em outro momento. Agradecemos sua compreensão!
        </p>
      </div>

      <button className="px-3 py-2 rounded-md flex items-center gap-2  bg-purple-800 text-zinc-50 hover:bg-purple-700 transition-all duration-300 ease-in-out">
        <Image
          alt="Logo Discord"
          src={"/icons-svgs/discord.svg"}
          width={25}
          height={25}
        />
        <span>Acompanhe via Discord</span>
      </button>
    </section>
  );
};
