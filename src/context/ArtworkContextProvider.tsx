import ArtworkContext from "./ArtworkContext";
import { axInst, axInstAccess } from "../config/axiosInstance";
import { IArtwork, UploadArtworkProps } from "../typing/Artworks";
import { MixedArtworks } from "../typing/ArtworksPropTypes";

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
      const { data: artwork } = await axInstAccess.get<IArtwork | void>(
        `/artwork?artworkID=${artworkID}`
      );
      console.log(artwork);
    } catch (e) {
      console.error(e);
    }
  };

  const getAllArtworkByUserID = async (userID: number) => {
    try {
      const { data: artwork } = await axInstAccess.get<IArtwork[] | void>(
        `/artwork/all?userID=${userID}`
      );
      console.log(artwork);
    } catch (e) {
      console.error(e);
    }
  };

  const setCritiqueStatus = async (artworkID: number, critiqueStatus: string) => {
    try {
      const { data } = await axInstAccess.get<boolean | void>(
        `/artwork?artworkID=${artworkID}&critiqueStatus=${critiqueStatus}`
      );
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const uploadArtwork = async ({ artworkFormData }: UploadArtworkProps) => {
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
    uploadArtwork,
  };

  return <ArtworkContext.Provider value={artworkContext}>{children}</ArtworkContext.Provider>;
};

export default ArtworkContextProvider;
