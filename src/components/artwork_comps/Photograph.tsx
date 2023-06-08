import React from "react";
import { Photograph } from "../../interfaces/Artwork";

type PhotographPropTypes = {
  photograph: Photograph;
};

const Photograph: React.FC<PhotographPropTypes> = ({ photograph }) => {
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
