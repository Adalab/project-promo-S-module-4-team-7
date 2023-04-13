import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import CreateProject from "./CreateProject";
import Error404 from "./Error404";
import ls from "../services/localStorage";
import { useState, useEffect } from "react";
import DetailCard from "./DetailCard";
import api from "../services/api";

function App({ eachCard }) {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    api.listProjectsApi().then((cleanData) => {
      setAllCards(cleanData);
    });
  }, []);

  const refreshPage = () => {
    api.listProjectsApi().then((cleanData) => {
      setAllCards(cleanData);
    });
  }

  const handleClickDeleteCard = (eachCard) => {
    console.log("RECARGA LA PÁGINA");
    api.deleteDataApi(eachCard).then((info) => {
      console.log("elimina en PItem");
      api.listProjectsApi().then((cleanData) => {
        setAllCards(cleanData);
      });
    });
  };

  const handleLs = (value) => {
    setAllCards(value);
  };

  //Aqui la variable de estado del lS
  // Lifting con el array de proyectos y la fx para modificar la variable de estado del lS

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Landing
            allCards={allCards}
            handleClickDeleteCard={handleClickDeleteCard}
            eachCard={eachCard}
          />
        }
      ></Route>
      <Route path="/detailcard" element={<DetailCard></DetailCard>}></Route>
      <Route
        path="/create"
        element={<CreateProject allCards={allCards} handleLs={handleLs} refreshPage={refreshPage} />}
      ></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes>
  );
}

export default App;
