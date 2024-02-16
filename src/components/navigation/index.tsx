import { Logo } from "../logo";
import { NavigationLinks } from "../navigation-links";

export const Navigation = () => {
  return (
    <nav className="w-full h-fit flex justify-between py-4 px-7">
      <Logo />
      <NavigationLinks />
    </nav>
  );
};
