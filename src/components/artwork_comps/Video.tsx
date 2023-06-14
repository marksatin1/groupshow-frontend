import React from "react";
import { Video } from "../../typing/Artworks";

const Video: React.FC<Video> = ({ title, isOpenForCritique }) => {
  return (
    <div>
      <h1>{title}</h1>
      {isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Video;
