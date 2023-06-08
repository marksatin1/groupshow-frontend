import React from 'react'
import { Performance } from '../../interfaces/Artwork'

type PerformancePropTypes = {
  artworkType: string;
  artworkID: number;
  title: string;
  statement?: string;
  submissionDate: string;
  url: string;
  averageScore: number;
  isOpenForCritique: boolean;
  genre: string;
  durationHour: number;
  durationMin: number;
  durationSec: number;
  performance: Performance
}

const Performance: React.FC<PerformancePropTypes> = ({performance}) => {
  return (
    <div>
      <h1>{performance.title}</h1>
      <video src={performance.url} />
      {performance.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  )
}

export default Performance