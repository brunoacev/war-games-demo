import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:place-items-start gap-4 w-full h-fit items-start py-5 px-6  border-t-[1px] border-zinc-300 dark:border-zinc-600 text-sm">
      <div className="flex flex-col gap-2">
        <span>Copyright &copy; 2023 War Games Contributors</span>
        <span>Released under the MIT License.</span>
      </div>

      <div className="flex flex-col gap-2">
        <span>Termos de Serviços</span>
        <span>Politicas de Privacidade</span>
      </div>

      <Link
        href={"https://brunoacev-dev.vercel.app/"}
        target="_blank"
        className="px-3 py-2 bg-zinc-100 w-fit h-fit text-zinc-600 hover:text-zinc-50 dark:bg-zinc-700 dark:text-zinc-50 rounded-sm font-semibold text-sm hover:cursor-pointer hover:bg-red-500 dark:hover:bg-red-500 transition-all duration-300 ease-in-out"
      >
        Develop by brunoacev-dev
      </Link>
    </footer>
  );
};
