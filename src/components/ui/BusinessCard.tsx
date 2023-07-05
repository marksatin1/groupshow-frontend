import { Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";

const BusinessCard = () => {
  return (
    <div className="business-card-container">
      <ProfilePicture className="pic-size" />
      <div className="business-card-details">
        <div>
          <h1>Chet Steadman</h1>
          <h2>B.A. Fine Arts - Sculpture</h2>
          <h2>B.S. Business Affairs</h2>
          <h3>Graduating 2025</h3>
        </div>
        <div>
          <Link to="/artwork/submit">
            <button type="button">Submit New Artwork</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
