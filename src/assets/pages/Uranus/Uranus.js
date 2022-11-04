import React from "react";
import PlanetMainInfo from "../../../components/PlanetMainInfo/PlanetMainInfo";
import Facts from "../../../components/Facts/Facts";
import data from "./uranusData";


const Uranus = () => {
    return (
        <>
          <main>
            <PlanetMainInfo data={data}/>
            <Facts data={data}/>
          </main>
        </>
      );
};

export default Uranus;
