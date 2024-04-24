import { NavLink, useLocation } from "react-router-dom";

const Navs = () => {
  let activeClassName = "text-sc06 lg:py-3 lg:px-1 lg:border-b lg:border-pr08";
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-x-6 justify-center text-center items-stretch mx-10 lg:ml-20 mt-10 my-4 lg:my-14">
        <div className="font-montserrat font-medium py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-base whitespace-nowrap text-pr08 hover:text-sc06">
          <NavLink
            to="/layanan/shipping"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            end>
            Shipping Agency
          </NavLink>
        </div>
        <div className="font-montserrat font-medium py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-base whitespace-nowrap text-pr08 hover:text-sc06">
          <NavLink
            to="/layanan/shipping/husbandry-service"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
            Husbandry Service
          </NavLink>
        </div>
        <div className="font-montserrat font-medium py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-base whitespace-nowrap text-pr08 hover:text-sc06 active:text-sc06 active:border-pr07">
          <NavLink
            to="/layanan/shipping/protecting-agency"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
            Owner Protecting Agent
          </NavLink>
        </div>
        <div className="font-montserrat font-medium py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-base whitespace-nowrap text-pr08 hover:text-sc06">
          <NavLink
            to="/layanan/shipping/launch-service"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
            Launch Service
          </NavLink>
        </div>
        <div className="font-montserrat font-medium py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-base whitespace-nowrap text-pr08 hover:text-sc06">
          <NavLink
            to="/layanan/shipping/launch-service"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
            Emergency Response
          </NavLink>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Navs;
