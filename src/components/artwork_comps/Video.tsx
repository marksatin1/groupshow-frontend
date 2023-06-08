import React from "react";
import { Video } from "../../interfaces/Artwork";

type VideoPropTypes = {
  video: Video;
};

const Video: React.FC<VideoPropTypes> = ({ video }) => {
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
