import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = () => {
  return (
    <header>
      <Desktop addStyles="hidden lg:block" />
      <Mobile addStyles="lg:hidden" />
    </header>
  );
};

export default Navbar;
