import { FC } from "react";
import { PerformancePropTypes } from "../../types/ArtworkPropTypes";
import { Link } from "react-router-dom";

const Performance: FC<PerformancePropTypes> = ({ performance }) => {
  return (
    <div className="artwork-card">
      <h1>{performance.title}</h1>
      <video src={performance.bucketUrl} />
      {performance.isOpenForCritique && (
        <div>
          <Link to={`/artwork/${performance.artworkID}/submit-critique`}>Critique</Link>
        </div>
      )}
    </div>
  );
};

export default Performance;
