import React from 'react'
import { Song } from '../../interfaces/Artwork'

type SongPropTypes = {
  artworkType: string;
  artworkID: number;
  title: string;
  statement?: string;
  submissionDate: string;
  url: string;
  averageScore: number;
  isOpenForCritique: boolean;
  durationMin: number;
  durationSec: number;
  song: Song;
}

const Song: React.FC<SongPropTypes> = ({song}) => {
  return (
    <div>
      <h1>{song.title}</h1>
      <audio src={song.url} />
      {song.isOpenForCritique && (
        <div>
          <h2>Critique</h2>
        </div>
      )}
    </div>
  )
}

export default Song;