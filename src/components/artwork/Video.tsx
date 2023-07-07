import { FC } from "react";
import { VideoPropTypes } from "../../types/ArtworkPropTypes";
import { Link } from "react-router-dom";

const Video: FC<VideoPropTypes> = ({ video }) => {
  return (
    <div className="artwork-card">
      <h1>{video.title}</h1>
      {video.isOpenForCritique && (
        <div>
          <Link to={`/artwork/${video.artworkID}/submit-critique`}>Critique</Link>
        </div>
      )}
    </div>
  );
};

export default Video;
