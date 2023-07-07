import { FC } from "react";
import { WritingPropTypes } from "../../types/ArtworkPropTypes";
import { Link } from "react-router-dom";

const Writing: FC<WritingPropTypes> = ({ writing }) => {
  return (
    <div className="artwork-card">
      <h1>{writing.title}</h1>
      <div>
        <p>{writing.bucketUrl}</p>
      </div>
      {writing.isOpenForCritique && (
        <div>
          <Link to={`/artwork/${writing.artworkID}/submit-critique`}>Critique</Link>
        </div>
      )}
    </div>
  );
};

export default Writing;
