import ProfilePicture from "./ProfilePicture";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const NavBar = () => {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      {isSignedIn && (
        <div className="nav-bar--left">
          <ProfilePicture className="pic-size" />
          <SearchBar />
        </div>
      )}
      <div className="nav-bar--center">
        <Logo />
      </div>
      {isSignedIn && (
        <div className="nav-bar--right">
          <HamburgerMenu />
        </div>
      )}
    </div>
  );
};

export default NavBar;
