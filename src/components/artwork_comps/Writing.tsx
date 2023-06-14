import React from "react";
import { Writing } from "../../typing/Artworks";

const Writing: React.FC<Writing> = ({ title, url, isOpenForCritique }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <p>{url}</p>
      </div>
      {isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Writing;
