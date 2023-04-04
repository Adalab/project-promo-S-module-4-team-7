import Header from "./Header";
import IntroLanding from "./IntroLanding";
import cover1 from "../images/cover1.jpeg";
import user from "../images/user.svg";
import "../styles/layout/DetailCard.scss";
import Footer from "./Footer";
import IntroCreateProject from "./IntroCreateProject";

function DetailCard({}) {
  return (
    <>
      <div className="container__landing-detailcard">
        <Header></Header>
        {/* <IntroLanding></IntroLanding> */}
        <IntroCreateProject />
        {/* PREVIEW */}
        <section className="preview">
          <img className="image" src={cover1} alt="" />

          {/* CARD */}
          <section className="author">
            <section className="author__ip">
              <p className="author__ip__subtitle">Personal Project Card</p>
              {/* <hr className='author__ip__line' /> */}

              <h2 className="author__ip__title">Elegant Workspace</h2>
              <p className="author__ip__slogan">Diseños Exclusivos</p>
              <p className="author__ip__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                faucibus commodo tellus lectus lobortis.
              </p>
              <section className="author__ip__tech">
                <p className="author__ip__tech__text">React JS, MongoDB</p>
                <div className="author__ip__tech__icons">
                  <a className="icon" href="" target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                  <a href="" className="icon" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </section>
            </section>

            <section className="author__ia">
              <img className="author__ia__image" src={user} alt="" />
              <p className="author__ia__job">Full Stack Developer"</p>
              <p className="author__ia__name">Emmelie Björklund</p>
            </section>
          </section>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default DetailCard;
