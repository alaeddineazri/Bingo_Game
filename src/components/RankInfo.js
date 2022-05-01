import React from "react";

const RankInfo = ({ el }) => {
  return (
    <div className="rank">
      <div>{el.name} </div>
      <div> {el.score}</div>
    </div>
  );
};

export default RankInfo;