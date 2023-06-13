import React from "react";
import { Photograph } from "../../typing/Artwork";

const Photograph: React.FC<Photograph> = ({ title, url, isOpenForCritique }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={url} alt={title} />
      {isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Photograph;
