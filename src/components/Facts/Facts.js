import React from "react";

function Facts(props) {
  const {data}=props;
  return (
    <>
      <div className="facts">
        <div className="facts-card">
          <p>ROTATION TIME</p>
          <h2>{data.rotation.toUpperCase()}</h2>
        </div>
        <div className="facts-card">
          <p>REVOLUTION TIME</p>
          <h2>{data.revolution.toUpperCase()}</h2>
        </div>
        <div className="facts-card">
          <p>RADIUS</p>
          <h2>{data.radius}</h2>
        </div>
        <div className="facts-card">
          <p>AVERAGE TEMP</p>
          <h2>{data.temperature}</h2>
        </div>
      </div>
    </>
  );
}

export default Facts;
