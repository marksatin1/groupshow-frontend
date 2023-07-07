import { CritiquePropTypes } from "../../types/CritiquePropTypes";
import CommentBox from "../ui/CommentBox";
import CritiqueCategory from "./CritiqueCategory";
import CritiqueSurvey from "./CritiqueSurvey";

const CritiqueBox: React.FC<CritiquePropTypes> = ({ critique }) => {
  return (
    <>
      <div className="critique-box">
        <CritiqueCategory critique={critique} />
        <CritiqueSurvey />
      </div>
      <CommentBox />
    </>
  );
};

export default CritiqueBox;
