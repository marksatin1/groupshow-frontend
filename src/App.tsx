import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Newsfeed from "./pages/Newsfeed";
import Portfolio from "./pages/Portfolio";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import SubmitArtwork from "./pages/SubmitArtwork";
import Artwork from "./pages/Artwork";
import { useContext } from "react";
import ArtworkContext from "./context/ArtworkContext";
import AuthContext from "./context/AuthContext";

const App = () => {
  const {
    getTwentyMostRecentArtworks,
    getSingleArtwork,
    getAllArtworkByUserID,
    setCritiqueStatus,
    uploadArtwork,
  } = useContext(ArtworkContext);

  // getTwentyMostRecentArtworks();
  // getSingleArtwork(1);
  // getAllArtworkByUserID(1);
  // setCritiqueStatus(1, "open");
  uploadArtwork({
    artworkFormData: {
      title: "PaintingTitle",
      artworkType: "painting",
      statement: "PaintingArtistStatement",
      artist: {
        userID: 1,
        userRole: "STUDENT",
        firstName: "Mark",
        lastName: "Satin",
        email: "mark@test.com",
        password: "newPassword",
        gradeLevel: "SENIOR",
        major: "Software Development",
        minor: "Film Production",
        creationDate: "",
      },
      url: "PaintingBucketUrl",
      isOpenForCritique: false,
      genre: "OIL",
      units: "IN",
      widthInches: 24.0,
      heightInches: 36.0,
      artworkID: 1,
      submissionDate: "",
      averageScore: 8,
    },
  });

  // const { refreshAccessToken } = useContext(AuthContext);
  // refreshAccessToken();

  return (
    <>
      {/* <Newsfeed /> */}
      {/* <Portfolio /> */}
      {/* <Register /> */}
      {/* <ResetPassword /> */}
      <Login />
      {/* <SubmitArtwork /> */}
      {/* <Artwork /> */}
    </>
  );
};

export default App;
