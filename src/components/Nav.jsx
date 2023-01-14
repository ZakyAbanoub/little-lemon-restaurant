import React from "react";
import { Routes, Route, Link } from "react-router-dom";

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
  return (
    <nav>
      <ul className="flex gap-4">
        {LINKS.map((link) => (
          <>
            {!link.isPage ? (
              <li>
                <a href={`#${link.link}`}>{link.label}</a>
              </li>
            ) : (
              <Link to={link.link}>{link.label}</Link>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
