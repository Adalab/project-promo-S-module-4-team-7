import "../styles/layout/ProjectItem.scss";
import api from "../services/api";

const ProjectItem = ({ eachCard, allCards, index, handleClickDeleteCard }) => {
  const url =
    "http://localhost:4000/api/projects/detail/" + eachCard.idprojects;

  // const handleDeleteProject = (ev) => {
  //   ev.preventDefault();
  //   console.log("hola");
  //   handleClickDeleteCard(eachCard.idprojects);
  // };

  const handleDeleteProject = (ev) => {
    ev.preventDefault();
    handleClickDeleteCard(eachCard.idprojects);
  };

  return (
    <li className="pi">
      <a href={url}>
        <section className="author">
          <section className="author__ip">
            <p className="author__ip__subtitle">{eachCard.name}</p>
            {/* <hr className='author__ip__line' /> */}

            <h2 className="author__ip__title">
              {eachCard.name || "Elegant Workspace"}
            </h2>
            <p className="author__ip__slogan">
              {eachCard.slogan || "Diseños Exclusivos"}
            </p>
            <p className="author__ip__desc">
              {eachCard.desc ||
                `Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Amet faucibus commodo
                    tellus lectus lobortis.`}
            </p>
            <section className="author__ip__tech">
              <p className="author__ip__tech__text">
                {eachCard.technologies || "React JS, MongoDB"}
              </p>
              <div className="author__ip__tech__icons">
                <a className="icon" href={`${eachCard.demo}`} target="_blank">
                  <i className="fa-solid fa-globe"></i>
                </a>
                <a href={`${eachCard.repo}`} target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </section>
          </section>

          <section className="author__ia">
            <img className="author__ia__image" src={eachCard.photo} alt="" />
            <p className="author__ia__job">
              {eachCard.job || "Full Stack Developer"}
            </p>
            <p className="author__ia__name">
              {eachCard.autor || "Emmelie Björklund"}
            </p>
          </section>
        </section>
      </a>

      <button
        className="button-delete"
        title="Haz click aquí para eliminar este proyecto"
        onClick={handleDeleteProject}
      >
        <i class="fa-regular fa-trash-can"></i>
      </button>
      {/* <a
            title="Haz click aquí para editar este proyecto"
            
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </a> */}
    </li>
  );
};

export default ProjectItem;
