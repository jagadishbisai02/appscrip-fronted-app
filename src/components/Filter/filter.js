import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import "./filter.css";

const Filter = (props) => {
  const { show } = props;
  const [drop, setDrop] = useState(false);

  return (
    <>
      <div className={`filter-container ${show ? "show" : "hide"}`}>
        <div className="filters menu-drop">
          <span>
            <input type="checkbox" />
          </span>
          Customizble
        </div>
        <div className="dropdown menu-drop">
          <div className="select-btn">
            <span className="btn-text">IDEAL FOR</span>
            <span
              className={`arrow-down ${drop ? "up" : "down"}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </div>
          <span>All</span>
          <ul className={`list-items ${drop ? "dropdown" : "dropup"}`}>
            <li className="item">
              <span>Unselect All</span>
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Men
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Women
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Baby & Kids
            </li>
          </ul>
        </div>
        <div className="dropdown menu-drop">
          <div className="select-btn">
            <span className="btn-text">OCCASION</span>
            <span
              className={`arrow-down ${drop ? "up" : "down"}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </div>
          <span>All</span>
          <ul className={`list-items ${drop ? "dropdown" : "dropup"}`}>
            <li className="item">
              <span>Unselect All</span>
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Men
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Women
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Baby & Kids
            </li>
          </ul>
        </div>
        <div className="dropdown menu-drop">
          <div className="select-btn">
            <span className="btn-text">WORK</span>
            <span
              className={`arrow-down ${drop ? "up" : "down"}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </div>
          <span>All</span>
          <ul className={`list-items ${drop ? "dropdown" : "dropup"}`}>
            <li className="item">
              <span>Unselect All</span>
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Men
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Women
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Baby & Kids
            </li>
          </ul>
        </div>
        <div className="dropdown menu-drop">
          <div className="select-btn">
            <span className="btn-text">FABRIC</span>
            <span
              className={`arrow-down ${drop ? "up" : "down"}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </div>
          <span>All</span>
          <ul className={`list-items ${drop ? "dropdown" : "dropup"}`}>
            <li className="item">
              <span>Unselect All</span>
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Men
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Women
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Baby & Kids
            </li>
          </ul>
        </div>
        <div className="dropdown menu-drop">
          <div className="select-btn">
            <span className="btn-text">SEGMENT</span>
            <span
              className={`arrow-down ${drop ? "up" : "down"}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </div>
          <span>All</span>
          <ul className={`list-items ${drop ? "dropdown" : "dropup"}`}>
            <li className="item">
              <span>Unselect All</span>
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Men
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Women
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Baby & Kids
            </li>
          </ul>
        </div>
        <div className="dropdown menu-drop">
          <div className="select-btn">
            <span className="btn-text">SUITABLE FOR</span>
            <span
              className={`arrow-down ${drop ? "up" : "down"}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </div>
          <span>All</span>
          <ul className={`list-items ${drop ? "dropdown" : "dropup"}`}>
            <li className="item">
              <span>Unselect All</span>
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Men
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Women
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Baby & Kids
            </li>
          </ul>
        </div>
        <div className="dropdown menu-drop">
          <div className="select-btn">
            <span className="btn-text">RAW MATERIALS</span>
            <span
              className={`arrow-down ${drop ? "up" : "down"}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </div>
          <span>All</span>
          <ul className={`list-items ${drop ? "dropdown" : "dropup"}`}>
            <li className="item">
              <span>Unselect All</span>
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Men
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Women
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Baby & Kids
            </li>
          </ul>
        </div>
        <div className="dropdown menu-drop">
          <div className="select-btn">
            <span className="btn-text">PATTERN</span>
            <span
              className={`arrow-down ${drop ? "up" : "down"}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </div>
          <span className="select-all">All</span>
          <ul className={`list-items ${drop ? "dropdown" : "dropup"}`}>
            <li className="item">
              <span>Unselect All</span>
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Men
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Women
            </li>
            <li className="item">
              <span>
                <input type="checkbox" />
              </span>
              Baby & Kids
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Filter;
