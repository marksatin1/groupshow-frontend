import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { axInst } from "../config/axiosInstance";
import { Painting } from "../interfaces/Artwork";
import ImageDisplay from "../components/ImageDisplay";

const Newsfeed = () => {
  const [artworks, setArtworks] = useState<Painting[]>([]);

  const populateNewsfeed = async () => {
    const getArtworks: any = await axInst.get("/newsfeed/");
    console.log(getArtworks.data);
    setArtworks(getArtworks.data);
  };

  useEffect(() => {
    populateNewsfeed();
  }, []);

  return (
    <>
      <NavBar />
      {artworks.map(painting => {
        return <ImageDisplay key={painting.artworkID} painting={painting} />;
      })}
    </>
  );
};

export default Newsfeed;
