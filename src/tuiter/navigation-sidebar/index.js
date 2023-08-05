import React from "react";
import { Link, useLocation } from "react-router-dom";
import { faHome, faSearch, faBell, faEnvelope, faBookmark, faListAlt, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { useSelector } from "react-redux";
function Navigation() {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [ignore, active] = pathname.split("/");

  const links = [
    { name: "home", icon: faHome },
    { name: "explore", icon: faSearch },
    { name: "notifications", icon: faBell },
    { name: "messages", icon: faEnvelope },
    { name: "bookmarks", icon: faBookmark },
    { name: "lists", icon: faListAlt },
    { name: "profile", icon: faUser },
    { name: "more", icon: faBars }
  ];

  return (
      <div className="list-group">
        {links.map((link) =>
            <Link to={`/tuiter/${link.name}`} className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}>
              <FontAwesomeIcon icon={link.icon} className="me-2" />
              <span className="d-none d-sm-inline">{link.name}</span>
            </Link>
        )}
        {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
        {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
        { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
      </div>
  );
}

// const NavigationSidebar = () => {
//   const { pathname } = useLocation();
//   const [ignore, active] = pathname.split("/");
//
//   const links = [
//     { name: "home", icon: faHome },
//     { name: "explore", icon: faSearch },
//     { name: "notifications", icon: faBell },
//     { name: "messages", icon: faEnvelope },
//     { name: "bookmarks", icon: faBookmark },
//     { name: "lists", icon: faListAlt },
//     { name: "profile", icon: faUser },
//     { name: "more", icon: faBars }
//   ];
//   return (
//       <div className="list-group">
//         {links.map((link) =>
//             <Link to={`/tuiter/${link.name}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
//               <FontAwesomeIcon icon={link.icon} className="me-2" />
//               <span className="d-none d-sm-inline">{link.name}</span>
//             </Link>
//         )}
//       </div>
//   );
// };
export default Navigation;