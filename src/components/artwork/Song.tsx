import { FC } from "react";
import { SongPropTypes } from "../../types/ArtworkPropTypes";

const Song: FC<SongPropTypes> = ({ song }) => {
  return (
    <div className="artwork-card">
      <h1>{song.title}</h1>
      <audio src={song.bucketUrl} />
      {song.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Song;
