import React from "react";
import "../styles/layout/Form.scss";
import Button from "./Button";
import GetAvatar from "./GetAvatar";

function Form({
  handleInput,
  data,
  errorMessage,
  url,
  cardMessage,
  handleClickCreateCard,
  errorMessageCard,
  updatePhoto,
  updateImages,
  classHidden,
  handleResetButton,
}) {
  const handleInputChange = (ev) => {
    handleInput(ev.target.value, ev.target.name);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="form">
      <h2 className="form__title">Información</h2>
      <section className="form__ask-info">
        <p className="form__ask-info__subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="form__ask-info__line" />
      </section>
      <form className="form__project" onSubmit={handleSubmit}>
        <fieldset className="project">
          <label htmlFor="name" className="project__label">
            {" "}
            Nombre del proyecto
          </label>
          <input
            required
            className="project__input"
            type="text"
            placeholder="Nombre del proyecto"
            name="name"
            id="name"
            minLength={2}
            value={data.name}
            onChange={handleInputChange}
          />
          <p className="errorMessage">{errorMessage.name}</p>
          <label htmlFor="slogan" className="project__label">
            Slogan
          </label>
          <input
            className="project__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            value={data.slogan}
            onChange={handleInputChange}
          />
          <p className="errorMessage">{errorMessage.slogan}</p>
          <label htmlFor="repo" className="project__label">
            Repositorio
          </label>
          <input
            required
            className="project__input"
            type="text"
            name="repo"
            id="repo"
            placeholder="https://github.com/enlacedeturepo"
            value={data.repo}
            onChange={handleInputChange}
          />
          <p className="errorMessage">{errorMessage.repo}</p>
          <label htmlFor="demo" className="project__label">
            Demo
          </label>
          <input
            required
            className="project__input"
            type="text"
            placeholder=" https://enlacedetuproyecto"
            name="demo"
            id="demo"
            value={data.demo}
            onChange={handleInputChange}
          />
          <p className="errorMessage">{errorMessage.demo}</p>
          <label htmlFor="technologies" className="project__label">
            Tecnologías
          </label>
          <input
            required
            className="project__input"
            type="text"
            placeholder="Tecnologías"
            name="technologies"
            id="technologies"
            value={data.technologies}
            onChange={handleInputChange}
          />
          <p className="errorMessage">{errorMessage.technologies}</p>
          <label htmlFor="desc" className="project__label">
            Descripción del proyecto
          </label>
          <textarea
            className="project__textarea"
            type="text"
            placeholder="Descripción"
            name="desc"
            id="desc"
            value={data.desc}
            onChange={handleInputChange}
          ></textarea>
          <p className="errorMessage">{errorMessage.desc}</p>
        </fieldset>
        <section className="ask-info__autor">
          <p className="ask-info__autor__subtitle">Cuéntanos sobre la autora</p>
          <hr className="ask-info__autor__line" />
        </section>
        <fieldset className="autor">
          <label htmlFor="autor" className="project__label">
            Nombre autora del proyecto
          </label>
          <input
            required
            className="autor__input"
            type="text"
            placeholder="Nombre"
            name="autor"
            id="autor"
            value={data.autor}
            onChange={handleInputChange}
          />
          <p className="errorMessage">{errorMessage.autor}</p>
          <label htmlFor="job" className="project__label">
            Trabajo{" "}
          </label>
          <input
            className="autor__input"
            type="text"
            placeholder="Trabajo"
            name="job"
            id="job"
            value={data.job}
            onChange={handleInputChange}
          />
          <p className="errorMessage">{errorMessage.job}</p>
        </fieldset>
        <section className="buttons-images">
          <GetAvatar
            className="buttons-img__btn"
            text="Subir foto de proyecto"
            updateAvatar={updatePhoto}
            handleClickCreateCard={handleClickCreateCard}
          />
          <GetAvatar
            className="buttons-img__btn"
            text="Subir foto de autora"
            updateAvatar={updateImages}
            handleClickCreateCard={handleClickCreateCard}
          />
          <button
            title="Haz click aquí para empezar desde cero"
            onClick={handleResetButton}
            className="button-reset"
          >
            {/* <i class='fa fa-refresh'></i> */}
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </section>

        <section className="buttons-img-2">
          <Button
            className="buttons-img-2__btn-large"
            text="Crear Tarjeta"
            handleClickCreateCard={handleClickCreateCard}
          />

          <p className="errorMessage">{errorMessage.photo}</p>
          <p className="errorMessage">{errorMessage.image}</p>
        </section>
        <section className="card">
          <span className=""></span>
          <a
            href={`${url}`}
            className={`card__msg ${classHidden ? "hidden" : true}`}
            target="_blank"
            rel="noreferrer"
            onSubmit={handleSubmit}
          >
            {cardMessage}
          </a>
          <p className="errorMessage">{errorMessageCard}</p>
        </section>
      </form>
    </section>
  );
}

export default Form;
