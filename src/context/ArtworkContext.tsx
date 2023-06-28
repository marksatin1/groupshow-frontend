import { createContext } from "react";
import { IArtworkContext, UploadArtworkProps } from "../typing/Artworks";

const ArtworkContext = createContext<IArtworkContext>({
  getTwentyMostRecentArtworks: () => Promise.resolve(),
  getSingleArtwork: (artworkID: number) => Promise.resolve(),
  getAllArtworkByUserID: (userID: number) => Promise.resolve(),
  setCritiqueStatus: (artworkID: number, critiqueStatus: string) => Promise.resolve(),
  uploadArtwork: ({ artworkFormData }: UploadArtworkProps) => Promise.resolve(),
});

export default ArtworkContext;
