import React from "react";
import PlanetMainInfo from "../../../components/PlanetMainInfo/PlanetMainInfo";
import Facts from "../../../components/Facts/Facts";
import jupiterData from "./jupiterData";

const Jupiter = () => {
    return (
        <>
          <main>
            <PlanetMainInfo data={jupiterData}/>
            <Facts data={jupiterData}/>
          </main>
        </>
      );
};

export default Jupiter;
