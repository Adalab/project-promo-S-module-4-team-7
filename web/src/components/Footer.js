import { Link } from "react-router-dom";
import logoAdalab from "../images/logo-adalab.png";
import logoGrupo7 from "../images/grupo7.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "../styles/layout/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/detailcard">
        <img src={logoGrupo7} className="header__icon"></img>
      </Link>
      <a href="https://adalab.es/" target="_blank" className="footer__logo">
        <img className="footer__logo__logo-adalab" src={logoAdalab} />
      </a>
    </footer>
  );
};

export default Footer;
