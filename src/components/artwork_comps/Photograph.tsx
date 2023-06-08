import React from "react";
import { Photograph } from "../../interfaces/Artwork";

type PhotographPropTypes = {
  artworkType: string;
  artworkID: number;
  title: string;
  statement?: string;
  submissionDate: string;
  url: string;
  averageScore: number;
  isOpenForCritique: boolean;
  isPrint: boolean;
  widthInches: number;
  heightInches: number;
  photograph: Photograph;
};

const Photograph: React.FC<PhotographPropTypes> = ({ photograph }) => {
  return (
    <div>
      <h1>{photograph.title}</h1>
      <img src={photograph.url} alt={photograph.title} />
      {photograph.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Photograph;
