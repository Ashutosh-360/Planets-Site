import React from "react";
import PlanetMainInfo from "../../../components/PlanetMainInfo/PlanetMainInfo";
import Facts from "../../../components/Facts/Facts";
import earthData from "./earthData";

const Earth = () => {
  return (
    <>
      <main>
        <PlanetMainInfo data={earthData}/>
        <Facts data={earthData}/>
      </main>
    </>
  );
};

export default Earth;
