import { FC } from "react";
import { PhotographPropTypes } from "../../types/ArtworkPropTypes";

const Photograph: FC<PhotographPropTypes> = ({ photograph }) => {
  return (
    <div className="artwork-card">
      <h1>{photograph.title}</h1>
      <img src={photograph.bucketUrl} alt={photograph.title} />
      {photograph.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Photograph;
