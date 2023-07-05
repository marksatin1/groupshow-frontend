import { FC } from "react";
import { WritingPropTypes } from "../../types/ArtworkPropTypes";

const Writing: FC<WritingPropTypes> = ({ writing }) => {
  return (
    <div className="artwork-card">
      <h1>{writing.title}</h1>
      <div>
        <p>{writing.bucketUrl}</p>
      </div>
      {writing.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Writing;
