import { NavLink, useLocation } from "react-router-dom";

const PortNavs = () => {
  let activeClassName = "text-sc06 lg:py-3 lg:px-1 lg:border-b lg:border-pr08";
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-x-6 justify-center text-center items-stretch mx-10 lg:ml-20 mt-10 my-4 lg:my-14">
        <div className="font-montserrat font-medium py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-base whitespace-nowrap text-pr08 hover:text-sc06">
          <NavLink
            to="/layanan/port-service"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            end>
            Mooring & Pilotage
          </NavLink>
        </div>
        <div className="font-montserrat font-medium py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-base whitespace-nowrap text-pr08 hover:text-sc06">
          <NavLink
            to="/layanan/port-service/dry-docking"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
            Dry Docking
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PortNavs;
