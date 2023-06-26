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
          <button type="submit">Submit New Artwork</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
