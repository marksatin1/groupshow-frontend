import { FC } from "react";
import { ArtworkCardPropTypes } from "../../types/UIPropTypes";

const ArtworkCard: FC<ArtworkCardPropTypes> = ({ title, bucketUrl, isOpenForCritique }) => {
  return (
    <div className="artwork-card">
      <h2>{title}</h2>
      <img src={bucketUrl} alt="" />
      {isOpenForCritique && <div className="critique">Critique</div>}
    </div>
  );
};

export default ArtworkCard;
