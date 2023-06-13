import React from "react";
import { Performance } from "../../typing/Artwork";

const Performance: React.FC<Performance> = ({ title, url, isOpenForCritique }) => {
  return (
    <div>
      <h1>{title}</h1>
      <video src={url} />
      {isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Performance;
