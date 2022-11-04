import React from "react";
import PlanetMainInfo from "../../../components/PlanetMainInfo/PlanetMainInfo";
import Facts from "../../../components/Facts/Facts";
import mercuryData from "./mercuryData";


const Mercury = () => {
    return (
        <>
          <main>
            <PlanetMainInfo data={mercuryData}/>
            <Facts data={mercuryData}/>
          </main>
        </>
      );
};

export default Mercury;
