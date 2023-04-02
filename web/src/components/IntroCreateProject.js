import { Link } from "react-router-dom";
import "../styles/layout/IntroCreateProject.scss";

function IntroCreateProject() {
  return (
    <div className="main__landing__container">
      <h1 className="main__landing__container__title">Proyectos Molones</h1>
      <p className="main__landing__container__subtitle">
        Escaparate en línea para recoger ideas a través de la tecnología.
      </p>
      <div className="main__landing__container__buttons">
        <Link to="/">
          <button className="main__landing__container__buttons__button-view-projects">
           Ver proyectos
          </button>
        </Link>
      </div>
    </div>
  );
}

export default IntroCreateProject;