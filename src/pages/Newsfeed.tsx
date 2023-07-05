import { useContext, useEffect, useState } from "react";
import NavBar from "../components/ui/NavBar";
import Painting from "../components/artwork/Painting";
import Performance from "../components/artwork/Performance";
import Photograph from "../components/artwork/Photograph";
import Song from "../components/artwork/Song";
import Video from "../components/artwork/Video";
import Writing from "../components/artwork/Writing";
import {
  IPainting,
  IPerformance,
  IPhotograph,
  ISong,
  IVideo,
  IWriting,
} from "../interfaces/Artwork";
import ArtworkContext from "../context/ArtworkContext";

const Newsfeed = () => {
  const [artworks, setArtworks] = useState<(JSX.Element | undefined)[] | undefined>([]);
  const { getTwentyMostRecentArtworks } = useContext(ArtworkContext);

  useEffect(() => {
    populateNewsfeed();
  }, []);

  const populateNewsfeed = async () => {
    const recentArtworks = await getTwentyMostRecentArtworks();
    const mappedArtworks = recentArtworks?.map(artwork => {
      switch (artwork.artworkType) {
        case "PAINTING":
          return <Painting key={artwork.artworkID} painting={artwork as IPainting} />;
        case "PERFORMANCE":
          return <Performance key={artwork.artworkID} performance={artwork as IPerformance} />;
        case "PHOTOGRAPH":
          return <Photograph key={artwork.artworkID} photograph={artwork as IPhotograph} />;
        case "SONG":
          return <Song key={artwork.artworkID} song={artwork as ISong} />;
        case "VIDEO":
          return <Video key={artwork.artworkID} video={artwork as IVideo} />;
        case "WRITING":
          return <Writing key={artwork.artworkID} writing={artwork as IWriting} />;
        default:
          break;
      }
    });

    setArtworks(mappedArtworks);
  };

  return (
    <>
      <NavBar />
      <div className="artwork-card-container">{artworks}</div>
    </>
  );
};

export default Newsfeed;
