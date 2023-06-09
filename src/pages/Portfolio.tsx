import { useState, useEffect } from "react";
import { axInst } from "../config/axiosInstance";

import NavBar from "../components/NavBar";
import Painting from "../components/artwork_comps/Painting";
import Performance from "../components/artwork_comps/Performance";
import Photograph from "../components/artwork_comps/Photograph";
import Song from "../components/artwork_comps/Song";
import Video from "../components/artwork_comps/Video";
import Writing from "../components/artwork_comps/Writing";

const Portfolio = () => {
  const [artworks, setArtworks] = useState<any[]>([]);

  const userID = 1;

  const populatePortfolio = async () => {
    const { data: artworksData }: any = await axInst.get(`/user/${userID}/submitted-artwork`);
    console.log(artworksData);
    setArtworks(artworksData);
  };

  useEffect(() => {
    populatePortfolio();
  }, []);

  const artworksToMap = artworks.map(artwork => {
    switch (artwork.artworkType) {
      case "Painting":
        return <Painting key={artwork.artworkID} painting={artwork} />;
      case "Performance":
        return <Performance key={artwork.artworkID} performance={artwork} />;
      case "Photograph":
        return <Photograph key={artwork.artworkID} photograph={artwork} />;
      case "Song":
        return <Song key={artwork.artworkID} song={artwork} />;
      case "Video":
        return <Video key={artwork.artworkID} video={artwork} />;
      case "Writing":
        return <Writing key={artwork.artworkID} writing={artwork} />;
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
