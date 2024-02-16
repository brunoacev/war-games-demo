export type FaqsCardType = {
  title: string;
  description: string;
  urlHelpers: string;
};

export const FaqsCard = ({ data }: { data: FaqsCardType }) => {
  return (
    <div className="w-full max-w-md flex flex-col gap-2 p-4 rounded-md shadow-md bg-zinc-100/50 hover:bg-zinc-50 transition-all duration-300 ease-in-out dark:bg-zinc-700/50 dark:hover:bg-zinc-700">
      <h2 className="font-semibold tracking-wide text-md">{data.title}</h2>
      <p className="text-sm tracking-wide">{data.description}</p>
      <span className="text-sm tracking-wide">
        Se preferir, entre em contato com nosso suporte via{" "}
        <span className="underline hover:cursor-pointer capitalize tracking-wider">
          Discord
        </span>
      </span>
    </div>
  );
};
