import React from "react";
import { Writing } from "../../interfaces/Artwork";

type WritingPropTypes = {
  artworkType: string;
  artworkID: number;
  title: string;
  statement?: string;
  submissionDate: string;
  url: string;
  averageScore: number;
  isOpenForCritique: boolean;
  genre: string;
  isFiction: boolean;
  wordCount: number;
  writing: Writing;
};

const Writing: React.FC<WritingPropTypes> = ({ writing }) => {
  return (
    <div>
      <h1>{writing.title}</h1>
      <div>
        <p>{writing.url}</p>
      </div>
      {writing.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  );
};

export default Writing;
