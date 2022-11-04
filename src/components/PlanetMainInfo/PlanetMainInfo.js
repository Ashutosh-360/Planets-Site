import React from "react";
import { useState } from "react";
import wiki from "../../assets/images/icon-source.svg";

function PlanetMainInfo(props) {
  const {data}=props;
  const [overviewContent,setOverviewContent]=useState(true);
  const [structureContent,setStructureContent]=useState(false);
  const [geologyContent,setGeologyContent]=useState(false);
  const overviewHandler=()=>{
    setOverviewContent(true);
    setGeologyContent(false);
    setStructureContent(false);
  }
  const structureHandler=()=>{
    setStructureContent(true);
    setOverviewContent(false);
    setGeologyContent(false);
  }
  const geologyHandler=()=>{
    setGeologyContent(true);
    setOverviewContent(false);
    setStructureContent(false);
  }
  return (
    <>
      <div className="planet-main-info">
        <div className="planet-img-container">
          <img src={data.overview.image} alt={data.name} />
        </div>
        <div className="info">
          <h1>{data.name.toUpperCase()}</h1>
          <p>
            {overviewContent?data.overview.content:structureContent?data.structure.content:geologyContent?data.geology.content:""}
          </p>
          <div className="source">
            <span>Source: </span>
            <a href={data.overview.source} target="blank">
              Wikipedia <img src={wiki} alt="" />
            </a>
          </div>
          <button className="btn" onClick={overviewHandler}>
            <span>01</span> OVERVIEW
          </button>
          <button className="btn" onClick={structureHandler}>
            <span>02</span> INTERNAL STRUCTURE
          </button>
          <button className="btn" onClick={geologyHandler}>
            <span>03</span> SURFACE GEOLOGY
          </button>
        </div>
      </div>
    </>
  );
}

export default PlanetMainInfo;
