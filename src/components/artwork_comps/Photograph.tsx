import React from "react";
import { PhotographProps } from "../../interfaces/ArtworkPropTypes";

const Photograph: React.FC<PhotographProps> = ({ photograph }) => {
  return (
    <div>
      <h1>{photograph.title}</h1>
      <img src={photograph.url} alt={photograph.title} />
      {photograph.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Photograph;
