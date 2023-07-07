import { FC } from "react";
import { PhotographPropTypes } from "../../types/ArtworkPropTypes";
import { Link } from "react-router-dom";

const Photograph: FC<PhotographPropTypes> = ({ photograph }) => {
  return (
    <div className="artwork-card">
      <h1>{photograph.title}</h1>
      <img src={photograph.bucketUrl} alt={photograph.title} />
      {photograph.isOpenForCritique && (
        <div>
          <Link to={`/artwork/${photograph.artworkID}/submit-critique`}>Critique</Link>
        </div>
      )}
    </div>
  );
};

export default Photograph;
