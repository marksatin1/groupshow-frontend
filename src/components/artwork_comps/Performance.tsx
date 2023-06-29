import React from "react";
import { PerformanceProps } from "../../interfaces/ArtworkPropTypes";

const Performance: React.FC<PerformanceProps> = ({ performance }) => {
  return (
    <div>
      <h1>{performance.title}</h1>
      <video src={performance.url} />
      {performance.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Performance;
