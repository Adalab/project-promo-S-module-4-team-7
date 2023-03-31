import logoAdalab from "../images/logo-adalab.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "../styles/layout/Footer.scss";
const element = <FontAwesomeIcon icon={faLaptopCode} />;


const Footer = () => {
    return (
        <footer className="footer">
            <a href="#" className='footer__icon'>
                {element}
            </a>
            <a href="https://adalab.es/" target="_blank" className="footer__logo">
                <img className='footer__logo__logo-adalab' src={logoAdalab} />
            </a>
        </footer>
    );
};

export default Footer;