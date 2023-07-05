import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import hamburgerIcon from "../../assets/icons8-hamburger-menu-50.png"

const HamburgerMenu = () => {

  const { isSignedIn, logout } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <img src={hamburgerIcon} alt="Hamburger Menu" />
      {isOpen && (
        <ul className="menu">
            <li className="menu-options"><Link to="/home">News Feed</Link></li>
          {isSignedIn && (
            <>
              <li className="menu-options"> <Link to="/artwork/submit">Upload Artwork</Link></li>
              <li className="menu-options"> <Link to="/profile">My Portfolio</Link> </li>
              <li className="menu-options" onClick={logout}>Logout</li>
            </>
          )}
          
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
