import CommentBox from "../ui/CommentBox";
import CritiqueCategory from "./CritiqueCategory";
import CritiqueSurvey from "./CritiqueSurvey";

const CritiqueBox = () => {
  return (
    <>
      <div className="critique-box">
        <CritiqueCategory />
        <CritiqueCategory />
        <CritiqueCategory />
        <CritiqueSurvey />
      </div>
      <CommentBox />
    </>
  );
};

export default CritiqueBox;
