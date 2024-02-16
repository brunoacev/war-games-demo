import { Logo } from "../logo";
import { NavigationLinks } from "../navigation-links";

export const Navigation = () => {
  return (
    <nav className="w-full h-fit flex justify-between">
      <Logo />

      <NavigationLinks />
    </nav>
  );
};
