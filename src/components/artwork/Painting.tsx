import { FC } from "react";
import { PaintingPropTypes } from "../../types/ArtworkPropTypes";

const Painting: FC<PaintingPropTypes> = ({ painting }) => {
  return (
    <div>
      <h1>{painting.title}</h1>
      <img src={painting.bucketUrl} alt={painting.title} />
      {painting.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Painting;
