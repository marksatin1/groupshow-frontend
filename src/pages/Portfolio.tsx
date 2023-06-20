import { useState, useEffect } from "react";
import { axInst } from "../config/axiosInstance";

import NavBar from "../components/ui/NavBar";
import Painting from "../components/artwork_comps/Painting";
import Performance from "../components/artwork_comps/Performance";
import Photograph from "../components/artwork_comps/Photograph";
import Song from "../components/artwork_comps/Song";
import Video from "../components/artwork_comps/Video";
import Writing from "../components/artwork_comps/Writing";
import { MixedArtworks } from "../typing/ArtworksPropTypes";
import { IPainting, IPerformance, IPhotograph, ISong, IVideo, IWriting } from "../typing/Artworks";

const Portfolio = () => {
  const [artworks, setArtworks] = useState<MixedArtworks>([]);

  const userID = 1;

  const populatePortfolio = async () => {
    try {
      const { data: artworksData } = await axInst.get(`/user/${userID}/submitted-artwork`);
      setArtworks(artworksData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    populatePortfolio();
  }, []);

  const artworksToMap = artworks.map(artwork => {
    switch (artwork.artworkType) {
      case "Painting":
        return <Painting key={artwork.artworkID} painting={artwork as IPainting} />;
      case "Performance":
        return <Performance key={artwork.artworkID} performance={artwork as IPerformance} />;
      case "Photograph":
        return <Photograph key={artwork.artworkID} photograph={artwork as IPhotograph} />;
      case "Song":
        return <Song key={artwork.artworkID} song={artwork as ISong} />;
      case "Video":
        return <Video key={artwork.artworkID} video={artwork as IVideo} />;
      case "Writing":
        return <Writing key={artwork.artworkID} writing={artwork as IWriting} />;
      default:
        break;
    }
  });

  return (
    <>
      <NavBar />
      <div>{artworksToMap}</div>
    </>
  );
};

export default Portfolio;
