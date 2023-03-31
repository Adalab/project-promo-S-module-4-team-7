import "../styles/layout/Error.scss";
import { Link } from "react-router-dom";
import errorGif from "../images/error404.gif";

const Error404 = () => {
    return (
        <main className="main__error">
            <img className="main__error__image" src={errorGif} alt="error animation" />
            <div className="container">
                <h1 className="main__error__title">404</h1>
                <p className="main__error__text">
                    ¡Vaya... Esta página se ha ido a buscar otros proyectos molones que todavía no existen!
                </p>
                <span className="main__error__span">
                    Error 404: Lo sentimos, no hemos podido encontrar la página que buscas
                </span>
                <p className="main__error__links__paragraph">
                    Aquí tienes algunos enlaces que pueden servirte de ayuda:
                </p>
                <div className="main__error__container">
                    <Link className="main__error__container__home" to="/">
                    Inicio
                    </Link>
                    <Link className="main__error__container__new-project" to="/create">
                        Nuevo proyecto
                    </Link>
                </div>
            </div>
        </main>
        

    );
};

export default Error404;