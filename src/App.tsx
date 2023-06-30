import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Newsfeed from "./pages/Newsfeed";
import Portfolio from "./pages/Portfolio";
import ResetPassword from "./pages/ResetPassword";
import SubmitArtwork from "./pages/SubmitArtwork";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import PageNotFound from "./pages/PageNotFound";
import ActivateAccount from "./pages/ActivateAccount";
import Register from "./pages/Register";

const App = () => {
  const { user, isSignedIn } = useContext(AuthContext);

  return (
    <Routes>
      {!isSignedIn && <Route path="/" element={<Login />} />}
      {!user?.isAccountActivated && (
        <Route path="/auth/activate-account/:userID/:regToken" element={<ActivateAccount />} />
      )}
      {isSignedIn && user?.userRole === "ADMIN" && (
        <Route path="/auth/register" element={<Register />} />
      )}
      {isSignedIn && user?.userRole !== "ADMIN" && (
        <>
          <Route path="/home" element={<Newsfeed />} />
          <Route path="/me" element={<Portfolio />} />
          <Route path="/artwork/submit" element={<SubmitArtwork />} />
        </>
      )}
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
