import { CritiquePropTypes } from "../../types/CritiquePropTypes";

const CritiqueCategory: React.FC<CritiquePropTypes> = ({ critique }) => {
  return (
    <div className="critique-category">
      <div className="content-head">
        <p>Rating</p>
        <p>{critique.rating}/10</p>
      </div>
      <div className="content-body">
        <p>{critique.content}</p>
      </div>
    </div>
  );
};

export default CritiqueCategory;
