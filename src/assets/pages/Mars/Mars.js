import React from "react";
import PlanetMainInfo from "../../../components/PlanetMainInfo/PlanetMainInfo";
import Facts from "../../../components/Facts/Facts";
import marsData from "./marsData";

const Mars = () => {
  return (
    <>
      <main>
        <PlanetMainInfo data={marsData}/>
        <Facts data={marsData}/>
      </main>
    </>
  );
};

export default Mars;
