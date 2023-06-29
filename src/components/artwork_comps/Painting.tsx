import React from "react";
import { PaintingProps } from "../../interfaces/ArtworkPropTypes";

const Painting: React.FC<PaintingProps> = ({ painting }) => {
  return (
    <div>
      <h1>{painting.title}</h1>
      <img src={painting.url} alt={painting.title} />
      {painting.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Painting;
