import React from "react";
import { Painting } from "../../interfaces/Artwork";

type PaintingPropTypes = {
  painting: Painting;
};

const Painting: React.FC<PaintingPropTypes> = ({ painting }) => {
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
