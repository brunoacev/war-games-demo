import Image from "next/image";

export type TeamCardType = {
  name: string;
  role: string;
  description: string;
  urlPhoto: string;
  urlDiscord: string;
};

export const TeamCard = ({ data }: { data: TeamCardType }) => {
  return (
    <div className="w-full max-w-md flex flex-col gap-2 p-4 rounded-md shadow-md bg-zinc-100/50 hover:bg-zinc-50 transition-all duration-300 ease-in-out dark:hover:bg-zinc-700 dark:bg-zinc-700/50">
      <div className="flex items-center gap-4">
        <Image alt="" src={data.urlPhoto} width={50} height={50} />
        <div className="flex flex-col gap-1">
          <span className="capitalize font-semibold text-md tracking-wide">
            {data.name}
          </span>
          <span className="text-xs tracking-wider capitalize">{data.role}</span>
        </div>
      </div>

      <p className="text-sm">
        {data.description}, Disponivel via{" "}
        <span className="underline hover:cursor-pointer">Discord</span>
      </p>
    </div>
  );
};
