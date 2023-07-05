import { FC } from "react";
import { VideoPropTypes } from "../../types/ArtworkPropTypes";

const Video: FC<VideoPropTypes> = ({ video }) => {
  return (
    <div className="artwork-card">
      <h1>{video.title}</h1>
      {video.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Video;
