import "../styles/layout/Landing.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import ProjectList from "./ProjectList";
import Intro from "./Intro";
import CardDetail from "./CardDetail";

function Landing({ allCards, data }) {

  return (
    <>
      <div
        className={`container__landing ${
          allCards.length >= 3 ? "min-height" : ""
        }`}
      >
        <Header />
        <main className="main__landing">
          <Intro />
          <Routes>
            <Route path="/"></Route>
            <Route 
            path="/:cardId"
            element={<CardDetail allCards={allCards} data={data} />}>
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
