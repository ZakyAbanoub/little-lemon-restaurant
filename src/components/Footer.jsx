import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const NAVIGATION_LIST = [
  {
    title: "Home",
    link: "/",
    isPage: true,
  },
  {
    title: "About",
    link: "about",
    isPage: false,
  },
  {
    title: "Menu",
    link: "menu",
    isPage: false,
  },
  {
    title: "Reservation",
    link: "/booking",
    isPage: true,
  },
  {
    title: "Order Online",
    linl: "order-online",
    isPage: false,
  },
  {
    title: "Login",
    link: "login",
    isPage: false,
  },
];

const CONTACT_LIST = [
  {
    title: "San Francisco, USA",
    link: "San Francisco, USA",
    isLink: false,
  },
  {
    title: "+123456789 ",
    link: "tel:+123456789",
    isLink: true,
  },
  {
    title: "mail@companyname.com",
    link: "mailto:mail@companyname.com",
    isLink: true,
  },
];

const SOCIAL_MEDIA_LIST = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/",
  },
];
const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-3">
        <div>
          <img src={Logo} alt="Little Lemon Logo" />
        </div>
        <div>
          <h3 className="font-bold mb-2 md:mb-5">Navigation</h3>
          <ul>
            {NAVIGATION_LIST.map((link) => (
              <li key={link.title}>
                {!link.isPage ? (
                  <a href={`#${link.link}`}>{link.title}</a>
                ) : (
                  <Link to={link.link}>{link.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 md:mb-5">Contact</h3>
          <ul>
            {CONTACT_LIST.map((link) => (
              <li key={link.title}>
                {link.isLink ? (
                  <a href={link.link}>{link.title}</a>
                ) : (
                  <p>{link.title}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 md:mb-5">Social Media Links</h3>
          <ul>
            {SOCIAL_MEDIA_LIST.map((link) => (
              <li key={link.title}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
