import React from "react";

const RankInfo = ({ el, index }) => {
  return (
    <div className="rank">
      <div>{index + 1}</div>
      <div>{el.name} </div>
      <div> {el.score}</div>
      {index===0?<div>🥇</div>:null}
      {index===1?<div>🥈</div>:null}
      {index===2?<div>🥉</div>:null}
      {index>2?<div>😄</div>:null}

    </div>
  );
};

export default RankInfo;
