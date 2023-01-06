import React from "react";

const LINKS = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Menu",
    link: "/menu",
  },
  {
    label: "Reservations",
    link: "/reservations",
  },
  {
    label: "Order Online",
    link: "/order-online",
  },
  {
    label: "Login",
    link: "/login",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {LINKS.map((link) => (
          <li>
            <a href={link.link}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
