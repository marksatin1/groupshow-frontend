import { useState, useEffect, useContext } from "react";

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
import BusinessCard from "../components/ui/BusinessCard";
import ContentBox from "../components/ui/ContentBox";
import ArtworkContext from "../context/ArtworkContext";
import AuthContext from "../context/AuthContext";

const Portfolio = () => {
  const [artworks, setArtworks] = useState<(JSX.Element | undefined)[] | undefined>([]);
  const { getAllArtworksByUserID } = useContext(ArtworkContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    populatePortfolio();
  }, []);

  const populatePortfolio = async () => {
    if (user !== undefined) {
      const userArtworks = await getAllArtworksByUserID(user.userID);
      const mappedArtworks = userArtworks?.map(artwork => {
        switch (artwork.artworkType) {
          case "PAINTING":
            return <><Painting key={artwork.artworkID} painting={artwork as IPainting} /> <hr /></>;
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
    }
  };

  return (
    <>
      <BusinessCard />
      <ContentBox
        title="About The Artist"
        content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. In recusandae magnam, et doloribus
        repellat, doloremque architecto sit perspiciatis nisi, tempore commodi beatae quae minima
        pariatur odit? Voluptatibus at cum doloribus? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit."
      />
      <div className="artwork-card-container">{artworks}</div>
    </>
  );
};

export default Portfolio;
