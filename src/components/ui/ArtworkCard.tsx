import { FC } from "react";
import { ArtworkCardPropTypes } from "../../types/UIPropTypes";

const ArtworkCard: FC<ArtworkCardPropTypes> = ({ title, bucketUrl, isOpenForCritique }) => {
  return (
    <div className="artwork-card">
      <h1>{title}</h1>
      <img src={bucketUrl} alt="" />
      {isOpenForCritique && <div className="critique">Critique</div>}
    </div>
  );
};

export default ArtworkCard;
