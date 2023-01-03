import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";

const Logo = () => {
  return (
    <NavLink to="/">
      <div className="flex items-center justify-center gap-1 mt-0">
        <img src={logo} alt="KrugerStar logo" />
        <p className="kruger-font text-[38px] mt-5 font-normal">KrugerStar</p>
      </div>
    </NavLink>
  );
};

const Mobile = ({ addStyles }) => {
  const [active, setActive] = useState(false);
  const menuHanlder = () => {
    setActive((prev) => !prev);
  };

  let activeStyle = {
    color: "white",
  };
  const links = [
    { label: "Home", route: "/" },
    { label: "IMC Calculator", route: "/imc-calculator" },
    { label: "Age Calculator", route: "/age-calculator" },
    { label: "My Clock", route: "/clock" },
    { label: "About me", route: "/about" },
    { label: "Contact", route: "/contact" },
  ];
  return (
    <>
      <nav className={`flex justify-between items-center px-4 ${addStyles}`}>
        <Logo />

        {/* Hamburguer btn */}
        <btn
          className="h-[2.5rem] w-[2.5rem] flex flex-col gap-2 justify-around py-2"
          onClick={menuHanlder}
        >
          {!active ? (
            <>
              <div className="bg-black h-2"></div>
              <div className="bg-black h-2"></div>
              <div className="bg-black h-2"></div>
            </>
          ) : (
            <CloseIcon className="w-full h-full" />
          )}
        </btn>
      </nav>
      {active && (
        <ul className="w-screen h-screen text-left flex flex-col justify-center p-8 bg-orange-400 my-2">
          {links.map((item) => {
            return (
              <li
                key={item.label}
                className="my-8 text-3xl text-slate-900 border-b border-black pb-4"
              >
                <NavLink
                  to={item.route}
                  className="font-bold"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Mobile;
