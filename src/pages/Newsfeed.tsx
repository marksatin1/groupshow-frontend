import { useEffect, useState } from "react";
import { axInst } from "../config/axiosInstance";
import NavBar from "../components/ui/NavBar";
import Painting from "../components/artwork_comps/Painting";
import Performance from "../components/artwork_comps/Performance";
import Photograph from "../components/artwork_comps/Photograph";
import Song from "../components/artwork_comps/Song";
import Video from "../components/artwork_comps/Video";
import Writing from "../components/artwork_comps/Writing";
import {
  IPainting,
  IPerformance,
  IPhotograph,
  ISong,
  IVideo,
  IWriting,
} from "../interfaces/Artwork";
import { MixedArtworks } from "../interfaces/ArtworkPropTypes";

const Newsfeed = () => {
  const [artworks, setArtworks] = useState<MixedArtworks>([]);

  const populateNewsfeed = async () => {
    try {
      const { data: artworksData } = await axInst.get("/newsfeed/");
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
      {/* <div>{artworksToMap}</div> */}
      <div className="artwork-card-container">
        <div className="artwork-card">
          <img
            src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3039&q=80"
            alt=""
          />
          <div className="critique">Critique</div>
        </div>
        <div className="artwork-card">
          <img
            src="https://az334034.vo.msecnd.net/images-0/the-birth-of-the-virgin-corrado-giaquinto-1606-1528ec6d.jpg"
            alt=""
          />
          <div className="critique">Critique</div>
        </div>
        <div className="artwork-card">
          <img
            src="https://az334034.vo.msecnd.net/images-0/the-birth-of-the-virgin-corrado-giaquinto-1606-1528ec6d.jpg"
            alt=""
          />
          <div className="critique">Critique</div>
        </div>
        <div className="artwork-card">
          <img
            src="https://az334034.vo.msecnd.net/images-0/the-birth-of-the-virgin-corrado-giaquinto-1606-1528ec6d.jpg"
            alt=""
          />
          <div className="critique">Critique</div>
        </div>
      </div>
    </>
  );
};

export default Newsfeed;
