import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4  w-full  h-fit items-center py-5  border-t-[1px] border-zinc-300 dark:border-zinc-600 text-sm">
      <div className="flex gap-4">
        <span>Copyright &copy; 2023 War Games Contributors</span>
        <span>Released under the MIT License.</span>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-4">
          <span>Termos de Serviços</span>
          <span>Politicas de Privacidade</span>
        </div>

        <Link
          href={"https://brunoacev-dev.vercel.app/"}
          target="_blank"
          className="px-3 py-2 bg-zinc-100 dark:bg-zinc-700 text-zinc-50 rounded-sm font-semibold text-sm hover:cursor-pointer hover:bg-red-500 dark:hover:bg-red-500 transition-all duration-300 ease-in-out"
        >
          Develop by brunoacev-dev
        </Link>
      </div>
    </footer>
  );
};
