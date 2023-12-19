import { NavLink } from "react-router-dom";
import "./Nav.scss";
import homeIcon from "../../assets/images/home.svg";
import bookIcon from "../../assets/images/book.svg";
import staffIcon from "../../assets/images/staff.svg";
import clientsIcon from "../../assets/images/clients.svg";
import settingsIcon from "../../assets/images/settings.svg";
import resourcesIcon from "../../assets/images/resources.svg";
import chevron from "../../assets/images/chevron.svg";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <div className="nav__links-container">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              <div className="nav__link-desktop">
                <img src={homeIcon} alt="Home link" className="nav__image" />
                <p className="nav__title">Home</p>
              </div>
              <div className="nav__link-mobile nav__link-mobile--home">
                <h2 className="nav__title">Home</h2>
                <img
                  src={chevron}
                  alt="Chevron icon"
                  className="nav__image--chevron"
                />
              </div>
            </NavLink>

            <NavLink
              to="/book-appointment"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              <div className="nav__link-desktop">
                <img
                  src={bookIcon}
                  alt="Book appointment link"
                  className="nav__image"
                />
                <p className="nav__title">Book Appointment</p>
              </div>
              <div className="nav__link-mobile">
                <h2 className="nav__title">New Booking</h2>
                <img
                  src={chevron}
                  alt="Chevron icon"
                  className="nav__image--chevron"
                />
              </div>
            </NavLink>

            <NavLink
              to="/staff"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              <div className="nav__link-desktop">
                <img src={staffIcon} alt="Staff link" className="nav__image" />
                <p className="nav__title">Staff</p>
              </div>
              <div className="nav__link-mobile">
                <h2 className="nav__title">Staff Details</h2>
                <img
                  src={chevron}
                  alt="Chevron icon"
                  className="nav__image--chevron"
                />
              </div>
            </NavLink>

            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              <div className="nav__link-desktop">
                <img
                  src={clientsIcon}
                  alt="Clients link"
                  className="nav__image"
                />
                <p className="nav__title">Clients</p>
              </div>
              <div className="nav__link-mobile">
                <h2 className="nav__title">Client Details</h2>
                <img
                  src={chevron}
                  alt="Chevron icon"
                  className="nav__image--chevron"
                />
              </div>
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              <div className="nav__link-desktop">
                <img
                  src={resourcesIcon}
                  alt="Resources link"
                  className="nav__image"
                />
                <p className="nav__title">Resources</p>
              </div>
              <div className="nav__link-mobile">
                <h2 className="nav__title">Resources</h2>
                <img
                  src={chevron}
                  alt="Chevron icon"
                  className="nav__image--chevron"
                />
              </div>
            </NavLink>
          </div>

          <div className="nav__links-container">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              <div className="nav__link-desktop">
                <img
                  src={settingsIcon}
                  alt="Settings link"
                  className="nav__image"
                />
                <p className="nav__title">Settings</p>
              </div>
              <div className="nav__link-mobile">
                <h2 className="nav__title">Settings</h2>
                <img
                  src={chevron}
                  alt="Chevron icon"
                  className="nav__image--chevron"
                />
              </div>
            </NavLink>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
