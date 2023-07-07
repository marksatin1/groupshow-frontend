import { FC } from "react";
import { PaintingPropTypes } from "../../types/ArtworkPropTypes";
import { Link, useNavigate } from "react-router-dom";

const Painting: FC<PaintingPropTypes> = ({ painting }) => {
  const navigate = useNavigate();

  return (
    <div className="artwork-card">
      <h3>{painting.title}</h3>
      <img
        src={painting.bucketUrl}
        alt={painting.title}
        onClick={() => navigate(`/artwork/${painting.artworkID}`)}
      />
      {painting.isOpenForCritique && (
        
          <Link className="critique" to={`/artwork/${painting.artworkID}/submit-critique`}>Critique</Link>
        
      )}
    </div>
  );
};

export default Painting;
