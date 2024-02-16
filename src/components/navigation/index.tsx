import { Logo } from "../logo";
import { NavigationLinks } from "../navigation-links";
import { ToggleMenu } from "../navigation-mobile/toggle-menu";

export const Navigation = () => {
  return (
    <nav className="w-full h-fit py-4 px-7 flex justify-between">
      <Logo />
      <div className="hidden md:flex">
        <NavigationLinks />
      </div>

      <div className="flex md:hidden">
        <ToggleMenu />
      </div>
    </nav>
  );
};
