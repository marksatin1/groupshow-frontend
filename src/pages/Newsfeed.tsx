import { useEffect, useState } from "react";
import { axInst } from "../config/axiosInstance";
import NavBar from "../components/ui/NavBar";
import Painting from "../components/artwork_comps/Painting";
import Performance from "../components/artwork_comps/Performance";
import Photograph from "../components/artwork_comps/Photograph";
import Song from "../components/artwork_comps/Song";
import Video from "../components/artwork_comps/Video";
import Writing from "../components/artwork_comps/Writing";

const Newsfeed = () => {
  const [artworks, setArtworks] = useState<any[]>([]);

  const populateNewsfeed = async () => {
    try {
      const { data: artworksData }: any = await axInst.get("/newsfeed/");
      setArtworks(artworksData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    populateNewsfeed();
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

export default Newsfeed;
