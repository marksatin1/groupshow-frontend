import ProfilePicture from "./ProfilePicture";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar--left">
        <ProfilePicture className="pic-size" />
        <SearchBar />
      </div>
      <div className="nav-bar--center">
        <Logo />
      </div>
      <div className="nav-bar--right">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default NavBar;
