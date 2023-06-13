import React from "react";
import { Painting } from "../../typing/Artwork";

const Painting: React.FC<Painting> = ({ title, url, isOpenForCritique }) => {
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

export default Painting;
