import "../styles/layout/Card.scss";
import user from "../images/usertest.jpeg";

function Card({ data }) {
  const urlDemo = data.demo.includes("https://")
    ? data.demo
    : `https://${data.demo}`;

  const urlRepo = data.repo.includes("https://")
    ? data.repo
    : `https://${data.repo}`;

  return (
    <section className="author">
      <section className="author__ip">
        <p className="author__ip__subtitle">Personal Project Card</p>
        {/* <hr className='author__ip__line' /> */}

        <h2 className="author__ip__title">
          {data.name || "Elegant Workspace"}
        </h2>
        <p className="author__ip__slogan">
          {data.slogan || "Diseños Exclusivos"}
        </p>
        <p className="author__ip__desc">
          {data.desc ||
            `Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Amet faucibus commodo
              tellus lectus lobortis.`}
        </p>
        <section className="author__ip__tech">
          <p className="author__ip__tech__text">
            {data.technologies || "React JS, MongoDB"}
          </p>
          <div className="author__ip__tech__icons">
            <a
              className={`icon ${data.demo === "" ? "disabled" : ""}`}
              href={urlDemo}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
            <a
              href={urlRepo}
              className={`icon ${data.demo === "" ? "disabled" : ""}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </section>
      </section>

      <section className="author__ia">
        <img className="author__ia__image" src={data.photo || user} alt="" />
        <p className="author__ia__job">{data.job || "Full Stack Developer"}</p>
        <p className="author__ia__name">{data.autor || "Emmelie Björklund"}</p>
      </section>
    </section>
  );
}

export default Card;
