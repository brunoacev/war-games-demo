import { PriceCard } from "./price-card";
import { Swords } from "lucide-react";

const Products: PriceCard[] = [
  {
    title: "Pacote De Nevereth",
    description: "Pacote inicial com grandes recompensas!",
    price: 150.0,
    products: [
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
    ],
  },
  {
    title: "Pacote De Nevereth 2.0",
    description: "Pacote avançado com grandes recompensas!",
    price: 200,
    products: [
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
    ],
  },
  {
    title: "Pacote De Nevereth 3.0",
    description: "Pacote avançado com grandes recompensas!",
    price: 300,
    products: [
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
    ],
  },
  {
    title: "Pacote De Nevereth 4.0",
    description: "Pacote avançado com grandes recompensas!",
    price: 500,
    products: [
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
      { icon: <Swords size={15} />, qtd: 5, title: "Porção de Vida" },
    ],
  },
];

export const Price = () => {
  return (
    <section className="flex flex-col gap-4 w-full  min-h-screen items-center py-5 px-10  border-b-[1px] border-zinc-300 dark:border-zinc-600">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="tracking-widest uppercase font-semibold text-zinc-400 dark:text-zinc-600">
          Preços
        </h2>
        <h3 className="tracking-wider font-medium text-center">
          Acompanhe os novos pacotes
        </h3>
      </div>

      <div className="grid place-items-center grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 px-4 w-full">
        {Products.map((product, idx) => (
          <PriceCard key={idx} data={product} />
        ))}
      </div>
    </section>
  );
};
