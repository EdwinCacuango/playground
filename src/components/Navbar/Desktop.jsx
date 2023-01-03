import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-1 mt-0">
      <img src={logo} alt="KrugerStar logo" />
      <p className="kruger-font text-[38px] mt-4 font-normal">KrugerStar</p>
    </div>
  );
};

const Desktop = ({ addStyles }) => {
  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "8px",
  };
  const links = [
    { label: "Home", route: "/" },
    { label: "IMC Calculator", route: "/imc-calculator" },
    { label: "Age Calculator", route: "/age-calculator" },
    { label: <Logo />, route: "/" },
    { label: "My Clock", route: "/clock" },
    { label: "About me", route: "/about" },
    { label: "Contact", route: "/contact" },
  ];
  return (
    <nav className={`w-full border-b border-slate-300 py-10 ${addStyles}`}>
      <ul className="flex justify-around w-full list-none items-center">
        {links.map((item) => {
          let value = typeof item.label;
          if (value != "string") {
            return (
              <li key={item.label}>
                <NavLink to={item.route} className="font-bold">
                  {item.label}
                </NavLink>
              </li>
            );
          } else {
            return (
              <li key={item.label} className="mt-4">
                <NavLink
                  to={item.route}
                  className="font-bold"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Desktop;
