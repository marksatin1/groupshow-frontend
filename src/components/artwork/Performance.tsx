import { FC } from "react";
import { PerformancePropTypes } from "../../types/ArtworkPropTypes";

const Performance: FC<PerformancePropTypes> = ({ performance }) => {
  return (
    <div>
      <h1>{performance.title}</h1>
      <video src={performance.bucketUrl} />
      {performance.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Performance;
