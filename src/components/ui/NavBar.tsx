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
      {isSignedIn && (
        <div className="nav-bar--left">
          <Link to="/profile">
            <ProfilePicture className="pic-size" />
          </Link>
          <SearchBar />
        </div>
      )}
      <div className="nav-bar--center">
        <Logo />
      </div>
      {isSignedIn && (
        <div className="nav-bar--right">
          {/* <button onClick={logout}>Logout</button> */}
          <HamburgerMenu />
        </div>
      )}
    </div>
  );
};

export default NavBar;
