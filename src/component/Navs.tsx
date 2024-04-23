import { NavLink } from "react-router-dom";

function Navs() {
  let activeClassName = "text-sc06";
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-x-6 justify-center text-center items-stretch mx-10 lg:ml-20 mt-10 my-4 lg:my-14 sm:mx-20">
        <a
          className="font-montserrat py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-sm whitespace-nowrap text-pr08 hover:text-sc06"
          href="/layanan/shipping"
          aria-current="page">
          Shipping Agency
        </a>
        <a
          className="font-montserrat py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-sm whitespace-nowrap text-pr08 hover:text-sc06"
          href="/layanan/shipping/husbandry-service">
          Husbandry Service
        </a>
        <a
          className="font-montserrat py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-sm whitespace-nowrap text-pr08 hover:text-sc06 active:text-sc06 active:border-pr07"
          href="/layanan/shipping/protecting-agency">
          Protecting Agency
        </a>
        <a
          className="font-montserrat py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-sm whitespace-nowrap text-pr08 hover:text-sc06 active:text-sc06 active:border-pr07"
          href="#">
          Launch Service
        </a>
        <a
          className="font-montserrat py-3 px-1 inline-flex items-center gap-2 border-b border-transparent text-sm border-pr02 whitespace-nowrap text-pr08 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          href="#">
          Emergency Response
        </a>
      </div>
    </section>
  );
}

export default Navs;
