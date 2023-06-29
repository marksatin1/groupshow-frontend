import { createContext } from "react";
import { IArtworkContext } from "../interfaces/Context";

const ArtworkContext = createContext<IArtworkContext>({
  getTwentyMostRecentArtworks: () => Promise.resolve(),
  getSingleArtwork: () => Promise.resolve(),
  getAllArtworkByUserID: () => Promise.resolve(),
  setCritiqueStatus: () => Promise.resolve(),
  submitArtwork: () => Promise.resolve(),
});

export default ArtworkContext;
