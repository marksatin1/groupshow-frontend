import React from "react";
import { Song } from "../../interfaces/Artwork";

const Song: React.FC<Song> = ({ title, url, isOpenForCritique }) => {
  return (
    <div>
      <h1>{title}</h1>
      <audio src={url} />
      {isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Song;
