import ContentBox from "../components/ui/ContentBox";
import NavBar from "../components/ui/NavBar";
import CritiqueBox from "../components/critique/CritiqueBox";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ArtworkContext from "../context/ArtworkContext";
import { SpecificArtwork } from "../types/ArtworkPropTypes";

const Artwork = () => {
  const [artwork, setArtwork] = useState<SpecificArtwork>();
  const [critiques, setCritiques] = useState<any[]>();
  const { artworkID } = useParams();
  const { getSingleArtwork, getCritiquesByArtworkID } = useContext(ArtworkContext);

  useEffect(() => {
    getRetrievedArtwork();
    getRetrievedCritiques();
  }, []);

  const getRetrievedArtwork = async () => {
    const retrievedArtwork = await getSingleArtwork(Number(artworkID));
    console.log(retrievedArtwork);
    setArtwork(retrievedArtwork!);
  };

  const getRetrievedCritiques = async () => {
    const retrievedCritiques = await getCritiquesByArtworkID(Number(artworkID));
    console.log(retrievedCritiques);
    setCritiques(retrievedCritiques!);
  };


  return (
    <div className="artwork-container">
      <h1>{artwork?.title}</h1>
      <img src={artwork?.bucketUrl} alt={artwork?.title} />
      <ContentBox title="Artist Statement" content={artwork?.artistStatement} />
      {critiques?.map(critique => (
        <CritiqueBox key={critique.critiqueID} critique={critique} />
      ))}
      {/* <ContentBox
        title="Meta"
        content="doloremque architecto sit perspiciatis nisi, tempore commodi beatae
        quae minima pariatur odit? Voluptatibus at cum doloribus? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. In recusandae magnam, et doloribus repellat, doloremque
        architecto sit perspiciatis nisi, tempore commodi beatae quae minima pariatur odit?
        Voluptatibus at cum doloribus?"
      />
      <ContentBox
        title="About The Artist"
        content="doloremque architecto sit perspiciatis nisi, tempore commodi beatae
        quae minima pariatur odit? Voluptatibus at cum doloribus? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. In recusandae magnam, et doloribus repellat, doloremque
        architecto sit perspiciatis nisi, tempore commodi beatae quae minima pariatur odit?
        Voluptatibus at cum doloribus?"
      /> */}
    </div>
  );
};

export default Artwork;
