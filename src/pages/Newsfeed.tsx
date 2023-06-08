import { useEffect, useState } from "react";
import { axInst } from "../config/axiosInstance";
import ImageDisplay from "../components/ImageDisplay";
import VideoDisplay from "../components/VideoDisplay";
import TextDisplay from "../components/TextDisplay";
import NavBar from "../components/NavBar";

const Newsfeed = () => {
  const [artworks, setArtworks] = useState<any[]>([]);

  const populateNewsfeed = async () => {
    const { data: getArtworks }: any = await axInst.get("/newsfeed/");
    console.log(getArtworks);
    setArtworks(getArtworks);
  };

  useEffect(() => {
    populateNewsfeed();
  }, []);

  const artworksToMap = artworks.map(artwork => {
    switch (artwork.artworkType) {
      case "Painting":
        return <ImageDisplay key={artwork.artworkID} artwork={artwork} />;
      case "Performance":
        return <VideoDisplay key={artwork.artworkID} artwork={artwork} />;
      case "Photograph":
        return <ImageDisplay key={artwork.artworkID} artwork={artwork} />;
      case "Song":
        return <ImageDisplay key={artwork.artworkID} artwork={artwork} />;
      case "Video":
        return <VideoDisplay key={artwork.artworkID} artwork={artwork} />;
      case "Writing":
        return <TextDisplay key={artwork.artworkID} artwork={artwork} />;
      default:
        break;
    }})    
  }

  return (
    <>
      <NavBar />
      <div>{artworksToMap}</div>
    </>
  );
};

export default Newsfeed;
