import "../styles/App.scss";
import {Route, Routes} from 'react-router-dom';
import Landing from "./Landing";
import CreateProject from "./CreateProject"; 
import Error404 from "./Error404";
import ls from '../services/localStorage';
import { useState } from "react";
import DetailCard from "./DetailCard";


function App() {
  const [allCards, setAllCards] = useState (ls.get('projectsLS', [])); 

  const handleLs = (value) => {
    setAllCards(value)
  }

  

  //Aqui la variable de estado del lS
  // Lifting con el array de proyectos y la fx para modificar la variable de estado del lS 

  return(
    <Routes>
      <Route path="/" element={<Landing allCards={allCards} />}></Route>
      <Route path="/detailcard" element={<DetailCard></DetailCard>}></Route>
      {/* <Route path="/*" element={<Error404 />}></Route> */}
      <Route path="/create" element={<CreateProject allCards={allCards} handleLs={handleLs} />}></Route>
      {/* <Route path="/create/*" element={<Error404 />}></Route> */}
    </Routes>

  );
};

export default App;