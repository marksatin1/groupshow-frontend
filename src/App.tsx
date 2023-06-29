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
import SubmitArtworkComponent from "./components/ui/SubmitArtworkComponent";

const App = () => {
  return (
    <>
      {/* <Newsfeed /> */}
      {/* <Portfolio /> */}
      {/* <Register /> */}
      {/* <ResetPassword /> */}
      {/* <Login /> */}
      <SubmitArtworkComponent artworkType={""} title={""} artistStatement={""} isOpenForCritique={""} fileUrl={""} isOpen={false} closeModal={function (): void {
        throw new Error("Function not implemented.");
      } } />
      {/* <Artwork /> */}
    </>
  );
};

export default App;
