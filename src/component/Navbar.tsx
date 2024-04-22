function Navbar() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-ne01 border-b border-gray-200 text-sm sm:py-0">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 bg-pr08">
          <div className="flex items-center justify-end gap-x-5 w-full py-2">
            <a
              className="uppercase inline-flex justify-center items-center gap-2 font-medium text-ne01 hover:text-sc06 text-xs"
              href="/kontak">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                  clip-rule="evenodd"
                />
              </svg>
              Kontak
            </a>
          </div>
        </div>
        <nav
          className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global">
          <div className="flex items-center justify-between">
            <a href="/">
              <img className="w-16 py-3" src="/logo_obm.png" />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold text-pr08 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation">
                <svg
                  className="hs-collapse-open:hidden size-8"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block flex-shrink-0 hidden size-8"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="divide-y-4 divide-slate-400/25 lg:divide-none hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col mb-8 lg:mb-0 gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a
                className="font-montserrat font-semibold text-pr08 sm:py-6 hover:text-sc06 uppercase"
                href="/tentang"
                aria-current="page">
                Tentang
              </a>
              <div className="hs-dropdown border-y-1 border-pr07 lg:border-none [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full text-pr08 font-montserrat font-semibold uppercase hs-dropdown-open:bg-pr08 hs-dropdown-open:text-ne01">
                  Layanan
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-pr08 md:bg-ne01 md:text-pr08 sm:shadow-md rounded-none p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 text-ne01 md:text-pr08 font-montserrat font-semibold hover:text-sc06"
                    href="/layanan/shipping">
                    Shipping
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 text-ne01 md:text-pr08 font-montserrat font-semibold hover:text-sc06"
                    href="/layanan/marine">
                    Marine
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 text-ne01 md:text-pr08 font-montserrat font-semibold hover:text-sc06"
                    href="/layanan/port-service">
                    Port Service
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 text-ne01 md:text-pr08 font-montserrat font-semibold hover:text-sc06"
                    href="/layanan/logistik">
                    Logistics & Transportation
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 text-ne01 md:text-pr08 font-montserrat font-semibold hover:text-sc06"
                    href="/layanan/konsultan">
                    Konsultan & Marine Correspondent
                  </a>
                </div>
              </div>
              <a
                className="font-montserrat font-semibold text-pr08 sm:py-6 hover:text-sc06 uppercase"
                href="/quality">
                Quality
              </a>
              <a
                className="font-montserrat font-semibold text-pr08 sm:py-6 hover:text-sc06 uppercase"
                href="/portofolio">
                Portofolio
              </a>
              <a
                className="font-montserrat font-semibold text-pr08 sm:py-6 hover:text-sc06 uppercase"
                href="/fasilitas">
                Fasilitas
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
