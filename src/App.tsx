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
  getSingleArtwork(1);

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
