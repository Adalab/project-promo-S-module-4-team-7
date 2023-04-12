import "../styles/layout/Landing.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";
import IntroLanding from "./IntroLanding";

function Landing({ allCards, handleClickDeleteCard}) {
  console.log(allCards);

  return (
    <>
      <div className="container__landing">
        <Header />
        <main className="main__landing">
          <IntroLanding />
          <ProjectList allCards={allCards} handleClickDeleteCard={handleClickDeleteCard} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
