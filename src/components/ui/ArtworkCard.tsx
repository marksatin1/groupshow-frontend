import React from "react";

const ArtworkCard = ({ title, url, isOpenForCritique }) => {
  return (
    <div className="artwork-card">
      <h1>{title}</h1>
      <div>
        <p>{url}</p>
      </div>
      {isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default ArtworkCard;
