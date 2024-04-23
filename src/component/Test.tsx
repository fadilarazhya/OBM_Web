import * as React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeClassName = "text-sc06 border-pr07";

  return (
    <nav className="flex flex-col lg:flex-row gap-x-6 justify-center text-center items-stretch mx-10 lg:ml-20 mt-10 my-4 sm:mx-20">
      <div className="font-montserrat py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-sm whitespace-nowrap text-pr08 hover:text-sc06">
        <ul>
          <li>
            <NavLink
              to="/layanan/shipping"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              Shipping Agency
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layanan/shipping/husbandry-service"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              Husbandry Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layanan/shipping/protecting-agency"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              Owner Protecting Agent
            </NavLink>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <NavLink
            to="/layanan/shipping/shipping-agency"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/layanan/shipping/husbandry-service">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Tasks
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/layanan/shipping/protecting-agency"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
            Tasks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavList;
