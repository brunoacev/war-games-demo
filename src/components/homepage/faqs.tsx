import { FaqsCardType, FaqsCard } from "./faqs-card";

const FaqsMessage: FaqsCardType[] = [
  {
    title: "Dúvida sobre tal assunto?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis sapiente eligendi porro illum mollitia natus, obcaecati alias! Neque eos saepe cumque praesentium illo placeat tempora, quam voluptates sint libero consequuntur, id maxime velit beatae!",
    urlHelpers: "",
  },
  {
    title: "Dúvida sobre tal assunto?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis sapiente eligendi porro illum mollitia natus, obcaecati alias! Neque eos saepe cumque praesentium illo placeat tempora, quam voluptates sint libero consequuntur, id maxime velit beatae!",
    urlHelpers: "",
  },
  {
    title: "Dúvida sobre tal assunto?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis sapiente eligendi porro illum mollitia natus, obcaecati alias! Neque eos saepe cumque praesentium illo placeat tempora, quam voluptates sint libero consequuntur, id maxime velit beatae!",
    urlHelpers: "",
  },
];

export const Faqs = () => {
  return (
    <section className="flex flex-col gap-4  w-full  h-fit items-center py-5  border-b-[1px] border-zinc-300 dark:border-zinc-600">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="tracking-widest uppercase font-semibold text-zinc-400 dark:text-zinc-600">
          TEM ALGUMA DÚVIDA?
        </h2>
        <h3 className="tracking-wider font-medium">FAQs</h3>
      </div>

      <div className="flex  flex-col gap-4">
        {FaqsMessage.map((faq, idx) => (
          <FaqsCard key={idx} data={faq} />
        ))}
      </div>
    </section>
  );
};
