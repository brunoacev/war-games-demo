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
  return <div className="h-5 w-[1px] bg-zinc-400" />;
};

export const NavigationLinks = () => {
  return (
    <div>
      <ul className="flex items-center gap-2 h-fit w-full">
        {urlLinks.map((url) => (
          <li key={url.id}>
            <Link href={url.urlPath} className="text-sm font-semibold">
              {url.title}
            </Link>
          </li>
        ))}
        <Bar />
        <ThemeToggle />
        <Bar />
        <SocialLinks />
      </ul>
    </div>
  );
};
