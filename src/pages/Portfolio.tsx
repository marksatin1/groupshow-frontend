import { useState, useEffect, useContext } from "react";
import { axInst } from "../config/axiosInstance";

import NavBar from "../components/ui/NavBar";
import Painting from "../components/artwork/Painting";
import Performance from "../components/artwork/Performance";
import Photograph from "../components/artwork/Photograph";
import Song from "../components/artwork/Song";
import Video from "../components/artwork/Video";
import Writing from "../components/artwork/Writing";
import { SpecificArtwork } from "../types/ArtworkPropTypes";
import {
  IPainting,
  IPerformance,
  IPhotograph,
  ISong,
  IVideo,
  IWriting,
} from "../interfaces/Artwork";
import BusinessCard from "../components/ui/BusinessCard";
import ContentBox from "../components/ui/ContentBox";
import ArtworkContext from "../context/ArtworkContext";
import AuthContext from "../context/AuthContext";

const Portfolio = () => {
  const [artworks, setArtworks] = useState<SpecificArtwork[]>([]);
  const { getAllArtworksByUserID } = useContext(ArtworkContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    populatePortfolio();
  }, []);

  const populatePortfolio = async () => {
    if (user !== undefined) {
      const userArtworks = await getAllArtworksByUserID(user.userID);
      userArtworks && setArtworks(userArtworks);
    }
  };

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
      <BusinessCard />
      <ContentBox
        title="About The Artist"
        content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. In recusandae magnam, et doloribus
        repellat, doloremque architecto sit perspiciatis nisi, tempore commodi beatae quae minima
        pariatur odit? Voluptatibus at cum doloribus? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit."
      />
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
      {/* <div>{artworksToMap}</div> */}
    </>
  );
};

export default Portfolio;
