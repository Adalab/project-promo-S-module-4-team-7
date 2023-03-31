// import 'layout/header';
import logoAdalab from "../images/logo-adalab.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "../styles/layout/Header.scss";
import logoGrupo7 from "../images/grupo7.svg"

const element = <FontAwesomeIcon icon={faLaptopCode} />;

function Header() {
  return (
    <header className='header'>
      <div className='icon'>
        <img src={logoGrupo7} className="header__icon"></img>
      </div>
      <a href="https://adalab.es/" target="_blank" className="footer__logo">
        <img className='logo-adalab' src={logoAdalab} alt='logo Adalab' />
      </a>
    </header>
  );
}

export default Header;
