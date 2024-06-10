import { TeamCardType, TeamCard } from "./team-card";

const TeamStaff: TeamCardType[] = [
  {
    name: "Bruno Azevedo",
    role: "Web Develop",
    description: "Posso te ajudar com problemas de conexção",
    urlDiscord: "",
    urlPhoto: "/icons-svgs/avatar.svg",
  },
  {
    name: "Bruno Azevedo",
    role: "Web Develop",
    description: "Posso te ajudar com problemas de conexção",
    urlDiscord: "",
    urlPhoto: "/icons-svgs/avatar.svg",
  },
  {
    name: "Bruno Azevedo",
    role: "Web Develop",
    description: "Posso te ajudar com problemas de conexção",
    urlDiscord: "",
    urlPhoto: "/icons-svgs/avatar.svg",
  },
  {
    name: "Bruno Azevedo",
    role: "Web Develop",
    description: "Posso te ajudar com problemas de conexção",
    urlDiscord: "",
    urlPhoto: "/icons-svgs/avatar.svg",
  },
  {
    name: "Bruno Azevedo",
    role: "Web Develop",
    description: "Posso te ajudar com problemas de conexção",
    urlDiscord: "",
    urlPhoto: "/icons-svgs/avatar.svg",
  },
  {
    name: "Bruno Azevedo",
    role: "Web Develop",
    description: "Posso te ajudar com problemas de conexção",
    urlDiscord: "",
    urlPhoto: "/icons-svgs/avatar.svg",
  },
  {
    name: "Bruno Azevedo",
    role: "Web Develop",
    description: "Posso te ajudar com problemas de conexção",
    urlDiscord: "",
    urlPhoto: "/icons-svgs/avatar.svg",
  },
  {
    name: "Bruno Azevedo",
    role: "Web Develop",
    description: "Posso te ajudar com problemas de conexção",
    urlDiscord: "",
    urlPhoto: "/icons-svgs/avatar.svg",
  },
];

export const Team = () => {
  return (
    <section className="flex flex-col gap-4  w-full  min-h-screen items-center py-5  border-b-[1px] border-zinc-300 dark:border-zinc-600">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="tracking-widest uppercase font-semibold text-zinc-400 dark:text-zinc-600">
          STAFF TEAM
        </h2>
        <h3 className="tracking-wider font-medium">
          Suporte para todos os players
        </h3>
      </div>

      <div className="grid place-items-center grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 px-6 w-full m-auto">
        {TeamStaff.map((team, idx) => (
          <TeamCard data={team} key={idx} />
        ))}
      </div>
    </section>
  );
};
