import { CiSearch, CiHeart } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="dummy-container">
          <p>
            <span>
              <MdOutlineDashboard />
            </span>
            Lorem ipsum dolor
          </p>
          <p>
            <span>
              <MdOutlineDashboard />
            </span>
            Lorem ipsum dolor
          </p>
          <p>
            <span>
              <MdOutlineDashboard />
            </span>
            Lorem ipsum dolor
          </p>
        </div>
        <div className="header">
          <img
            src="https://res.cloudinary.com/df5wssoz1/image/upload/v1712390033/appscrip/logo_yzgbkw.png"
            alt="logo"
          />
          <h1>LOGO</h1>
          <div className="icons-container">
            <span>
              <CiSearch />
            </span>
            <span>
              <CiHeart />
            </span>
            <span>
              <TiShoppingBag />
            </span>
            <span>
              <CgProfile />
            </span>
            <span>
              <select>
                <option>ENG</option>
              </select>
            </span>
          </div>
        </div>
        <ul className="menu-list-container">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </>
  );
};
export default Header;
