import React from "react";
import { Song } from "../../interfaces/Artwork";

type SongPropTypes = {
  song: Song;
};

const Song: React.FC<SongPropTypes> = ({ song }) => {
  return (
    <div>
      <h1>{song.title}</h1>
      <audio src={song.url} />
      {song.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Song;
