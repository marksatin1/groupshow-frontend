import ArtworkContext from "./ArtworkContext";
import { axInst } from "../config/axiosInstance";
import { IArtwork } from "../interfaces/Artwork";
import { MixedArtworks } from "../types/ArtworkPropTypes";
import { SubmitArtworkFormPropTypes } from "../types/FormPropTypes";

const ArtworkContextProvider = ({ children }: any) => {
  const getTwentyMostRecentArtworks = async () => {
    try {
      const { data: artworks } = await axInst.get<MixedArtworks[] | void>("/artwork/get-twenty");
      console.log(artworks);
    } catch (e) {
      console.error(e);
    }
  };

  const getSingleArtwork = async (artworkID: number) => {
    try {
      const { data: artwork } = await axInst.get<IArtwork | void>(`/artwork/${artworkID}`);
      console.log(artwork);
    } catch (e) {
      console.error(e);
    }
  };

  const getAllArtworkByUserID = async (userID: number) => {
    try {
      const { data: artwork } = await axInst.get<IArtwork[] | void>(`/artwork/all/${userID}`);
      console.log(artwork);
    } catch (e) {
      console.error(e);
    }
  };

  const setCritiqueStatus = async (artworkID: number, critiqueStatus: string) => {
    try {
      const { data } = await axInst.get<boolean | void>(
        `artwork/set-status/${artworkID}/${critiqueStatus}`
      );
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const submitArtwork = async ({ artworkFormData }: SubmitArtworkFormPropTypes) => {
    try {
      const { data }: any = await axInst.post(
        `/${artworkFormData.artworkType}/upload`,
        artworkFormData
      );
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const artworkContext = {
    getTwentyMostRecentArtworks,
    getSingleArtwork,
    getAllArtworkByUserID,
    setCritiqueStatus,
    submitArtwork,
  };

  return <ArtworkContext.Provider value={artworkContext}>{children}</ArtworkContext.Provider>;
};

export default ArtworkContextProvider;
