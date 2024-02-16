import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { SocialLinks } from "../social-links";

type UrlLink = {
  id: number;
  title: string;
  urlPath: string;
};

const urlLinks: UrlLink[] = [
  {
    id: 1,
    title: "Guias",
    urlPath: "/guides",
  },

  {
    id: 2,
    title: "Comunidade",
    urlPath: "/community",
  },
  {
    id: 3,
    title: "Download",
    urlPath: "/download",
  },
];

const Bar = () => {
  return <div className="h-[1px] w-full md:h-5 md:w-[1px] bg-zinc-400" />;
};

export const NavigationLinks = () => {
  return (
    <ul className="flex flex-col items-start md:flex-row md:items-center gap-2 h-fit w-full">
      {urlLinks.map((url) => (
        <li key={url.id}>
          <Link href={url.urlPath} className="text-sm font-semibold">
            {url.title}
          </Link>
        </li>
      ))}
      <Bar />
      <div className="w-full flex justify-center">
        <ThemeToggle />
      </div>
      <Bar />
      <div className="w-full flex justify-center">
        <SocialLinks />
      </div>
    </ul>
  );
};
