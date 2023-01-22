import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../assets/icon _hamburger menu.svg";
import CloseIcon from "../assets/x-png.jpg";

const LINKS = [
  {
    label: "Home",
    link: "/",
    isPage: true,
  },
  {
    label: "About",
    link: "about",
    isPage: false,
  },
  {
    label: "Menu",
    link: "menu",
    isPage: false,
  },
  {
    label: "Reservations",
    link: "/booking",
    isPage: true,
  },
  {
    label: "Order Online",
    link: "order-online",
    isPage: false,
  },
  {
    label: "Login",
    link: "login",
    isPage: false,
  },
];

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const showLinksHandler = () => {
    setShowLinks((prevState) => !prevState);
  };

  // const hideLinksHandler = () => {
  //   document.body.classList.remove("overflow-hidden");
  //   setShowLinks(false);
  // };

  useEffect(() => {
    if (showLinks === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showLinks]);

  return (
    <nav>
      <ul className="hidden md:flex md:gap-4">
        {LINKS.map((link) => (
          <li key={link.label}>
            {!link.isPage ? (
              <a href={`#${link.link}`}>{link.label}</a>
            ) : (
              <Link to={link.link}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
      <img
        src={HamburgerMenu}
        alt="hamburger menu"
        className="flex md:hidden cursor-pointer"
        onClick={showLinksHandler}
      />
      {showLinks && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-primary_1/90 text-primary_2 z-40">
          <img
            src={CloseIcon}
            aria-label="close"
            alt="close icon"
            className="w-[64px] absolute top-10 left-10"
            onClick={() => setShowLinks(false)}
          />
          <ul className="text-center top-[50%] -translate-y-1/2 relative flex flex-col gap-10 font-serif text-3xl">
            {LINKS.map((link) => (
              <li key={link.label} onClick={() => setShowLinks(false)}>
                {!link.isPage ? (
                  <li key={link.label}>
                    <a href={`#${link.link}`}>{link.label}</a>
                  </li>
                ) : (
                  <Link to={link.link}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
