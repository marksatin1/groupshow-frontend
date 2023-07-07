import ProfilePicture from "./ProfilePicture";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isSignedIn, logout } = useContext(AuthContext);


  return (
    <div className="nav-bar">
      <div className="nav-bar--left">
        {isSignedIn && (
            <>
              <Link to="/profile">
                <ProfilePicture className="pic-size" />
              </Link>
              <SearchBar />
            </>
            )}
        </div>
      <div className="nav-bar--center">
        <Link className="logo-link" to="/home">
          <Logo />
        </Link>
      </div>
      <div className="nav-bar--right">
        {isSignedIn && (
            <HamburgerMenu />
            )}
      </div>
    </div>
  );
};

export default NavBar;
