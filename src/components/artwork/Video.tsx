import { FC } from "react";
import { VideoPropTypes } from "../../types/ArtworkPropTypes";

const Video: FC<VideoPropTypes> = ({ video }) => {
  return (
    <div>
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
