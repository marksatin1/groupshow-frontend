import ArtworkContext from "./ArtworkContext";
import { axInst } from "../config/axiosInstance";
import { IArtwork } from "../interfaces/Artwork";
import { SpecificArtwork } from "../types/ArtworkPropTypes";
import { SubmitArtworkFormPropTypes, SubmitCritiqueFormPropTypes } from "../types/FormPropTypes";
import { useNavigate } from "react-router-dom";

const ArtworkContextProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const getTwentyMostRecentArtworks = async () => {
    try {
      const { data: artworks } = await axInst.get<SpecificArtwork[] | void>("/artwork/get-twenty");
      console.log(`Last 20 submitted artworks: ${artworks}`);
      return artworks;
    } catch (e) {
      console.error(e);
    }
  };

  const getSingleArtwork = async (artworkID: number) => {
    try {
      const { data: artwork } = await axInst.get<IArtwork | void>(`/artwork/${artworkID}`);
      console.log(`Artwork ID ${artworkID}: ${artwork}`);
      return artwork;
    } catch (e) {
      console.error(e);
    }
  };

  const getAllArtworksByUserID = async (userID: number) => {
    try {
      const { data: artworks } = await axInst.get<SpecificArtwork[] | void>(
        `/artwork/all/${userID}`
      );
      console.log(`All artworks for User ${userID}: ${artworks}`);
      return artworks;
    } catch (e) {
      console.error(e);
    }
  };

  const setCritiqueStatus = async (artworkID: number, critiqueStatus: string) => {
    try {
      const { data: isOpenForCritique } = await axInst.get<boolean | void>(
        `artwork/set-status/${artworkID}/${critiqueStatus}`
      );
      console.log(`Artwork ${artworkID} is open for critique: ${isOpenForCritique}`);
    } catch (e) {
      console.error(e);
    }
  };

  const submitArtwork = async ({ submitArtworkFormData }: SubmitArtworkFormPropTypes) => {
    try {
      const { data: isSubmittedSuccessfully } = await axInst.post<boolean | void>(
        `/${submitArtworkFormData.artworkType.toLowerCase()}/upload`,
        submitArtworkFormData
      );
      console.log(`Artwork form data is submitted successfully: ${isSubmittedSuccessfully}`);
      return navigate("/profile");
    } catch (e) {
      console.error(e);
    }
  };

  const submitCritique = async ({ submitCritiqueFormData }: SubmitCritiqueFormPropTypes) => {
    try {
      const { data: isSubmittedSuccessfully } = await axInst.post<boolean | void>(
        "/critique/add",
        submitCritiqueFormData
      );
      console.log(`Artwork form data is submitted successfully: ${isSubmittedSuccessfully}`);
      return navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };

  const getCritiquesByArtworkID = async (artworkID: number) => {
    try {
      const { data: critiques } = await axInst.get<any[] | void>(`/critique/all/${artworkID}`);
      return critiques;
    } catch (e) {
      console.error(e);
    }
  };

  const artworkContext = {
    getTwentyMostRecentArtworks,
    getSingleArtwork,
    getAllArtworksByUserID,
    setCritiqueStatus,
    submitArtwork,
    submitCritique,
    getCritiquesByArtworkID,
  };

  return <ArtworkContext.Provider value={artworkContext}>{children}</ArtworkContext.Provider>;
};

export default ArtworkContextProvider;
