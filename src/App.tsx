import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Newsfeed from "./pages/Newsfeed";
import Portfolio from "./pages/Portfolio";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import SubmitArtwork from "./pages/SubmitArtwork";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Artwork from "./pages/Artwork";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <>
      <Routes>
        {!isSignedIn && <Route path="/" element={<Login />} />}
        {isSignedIn && (
          <>
            <Route path="/home" element={<Newsfeed />} />
            <Route path="/me" element={<Portfolio />} />
            <Route path="/artwork/submit" element={<SubmitArtwork />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
          </>
        )}

        {/* <Register /> */}
        {/* <Artwork /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
