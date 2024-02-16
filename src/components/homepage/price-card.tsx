import { ReactNode } from "react";

type Product = { icon: ReactNode; qtd: number; title: string };

export type PriceCard = {
  title: string;
  price: number;
  description: string;
  products: Product[];
};

export const PriceCard = ({ data }: { data: PriceCard }) => {
  return (
    <div className="w-full max-w-sm min-h-full max-h-80 p-4 rounded-lg flex flex-col justify-between gap-4 shadow-md bg-zinc-100/50 hover:bg-zinc-50 transition-all duration-300 ease-in-out dark:bg-zinc-700/50 dark:hover:bg-zinc-700">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-extrabold tracking-wide text-center">
          {data.title}
        </h3>
        <p className="text-sm text-center">{data.description}</p>
        <span className="font-semibold tracking-wide text-md">
          R$ {data.price.toFixed(2)}
        </span>
      </div>

      <div>
        {data.products.map((product, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <span>{product.icon}</span>
            <span>{product.qtd}</span>
            <span>{product.title}</span>
          </div>
        ))}
      </div>

      <button className="bg-purple-800 text-zinc-50 p-2 rounded-md hover:bg-purple-700 transition-all duration-300 ease-in-out">
        Comprar
      </button>
    </div>
  );
};
