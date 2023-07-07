import { FC } from "react";
import { SongPropTypes } from "../../types/ArtworkPropTypes";
import { Link } from "react-router-dom";

const Song: FC<SongPropTypes> = ({ song }) => {
  return (
    <div className="artwork-card">
      <h1>{song.title}</h1>
      <audio src={song.bucketUrl} />
      {song.isOpenForCritique && (
        <div>
          <Link to={`/artwork/${song.artworkID}/submit-critique`}>Critique</Link>
        </div>
      )}
    </div>
  );
};

export default Song;
