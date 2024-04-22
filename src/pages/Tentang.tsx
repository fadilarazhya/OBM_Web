import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Card from "../component/Card";

export default () => {
  return (
    <>
      <Navbar />
      <Banner
        bgImage="./img/tentang_assets/tentang_banner.JPG"
        headCaption="Tentang OBM"
        captionSection="OBM didirikan dan melewati masa-masa sulit sejak tahun 2017, 
        namun mampu bertahan melalui krisis & pandemi COVID-19 di tahun 2019 dan terus 
        sampai saat ini."
      />
      <div className="relative">
        <section className="bg-pr09 overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
                <h1 className="pb-8 text-3xl font-raleway text-medium text-ne01 sm:text-4xl">
                  Profil Perusahaan
                </h1>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  PT. Orela Bahari Mandiri (OBM) merupakan perusahaan Pelayaran
                  dan Jasa Keagenan Kapal yang didirikan tahun 2017.
                </p>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  Latar belakang yang sama di antara para pendiri telah
                  mendorong Dharma Kala’ Tiku sebagai inisiator bersama para
                  koleganya untuk mendirikan OBM, dimulai dari jasa keagenan
                  kapal, hingga kini bertumbuh sebagai satu perusahaan Pelayaran
                  yang profesional serta diperhitungkan dalam industri maritim
                  Indonesia dengan pengembangan di bidang terkait.
                </p>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  Sejak didirikan di 2017, PT. OBM melewati masa-masa sulit,
                  namun mampu bertahan, bahkan melalui pandemi COVID-19 di tahun
                  2019 dan terus berkembang sampai saat ini. Krisis selalu
                  membawa perubahan dan kami belajar dari masa lalu untuk
                  menghadirkan layanan yang beradaptasi dengan kebutuhan
                  pelanggan.
                </p>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  OBM berkomitmen untuk memberikan yang terbaik dalam mendukung
                  kesuksesan customer sebagai mitra usaha. Dengan semangat
                  kemitraan dan tujuan yang sederhana yaitu menjadi perusahaan
                  yang berkarakter, OBM telah mampu melayani kebutuhan hampir
                  semua jenis kapal di berbagai wilayah Negara Indonesia.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100 brightness-50"
                  src="./img/tentang_assets/caption.JPG"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="mx-6 py-10 px-4 lg:mx-32">
          <h1 className="font-raleway text-3xl sm:text-4xl text-ne02 py-4 sm:py-8">
            Milestone
          </h1>
          <div className="items-center justify-center">
            <div className="ps-2 my-2 first:mt-0">
              <h1 className="text-2xl font-raleway font-medium uppercase text-pr07">
                2017
              </h1>
            </div>

            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-pr03">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-pr03"></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h2 className="flex gap-x-1.5 font-semibold text-lg text-sc06">
                  PT. OBM DIDIRIKAN SEBAGAI PERUSAHAAN KEAGENAN KAPAL
                </h2>
                <p className="mt-1 text-sm text-ne02"></p>
              </div>
            </div>

            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400"></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h2 className="flex gap-x-1.5 text-base font-montserrat text-ne02">
                  Agen pendukung armada PT. PGN LNG FSRU Lampung (Novasi)
                </h2>
              </div>
            </div>

            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400"></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                  Marked "Install Charts" completed
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Finally! You can check it out here.
                </p>
                <button
                  type="button"
                  className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                  <img
                    className="flex-shrink-0 size-4 rounded-full"
                    src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  James Collins
                </button>
              </div>
            </div>

            <div className="ps-2 my-2 first:mt-0">
              <h3 className="text-xs font-medium uppercase text-gray-500">
                31 Jul, 2023
              </h3>
            </div>

            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400"></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                  Take a break ⛳️
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Just chill for now... 😉
                </p>
              </div>
            </div>

            {/* <!-- Collapse --> */}
            <div
              id="hs-timeline-collapse"
              className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-timeline-collapse-content">
              <div className="ps-2 my-2">
                <h3 className="text-xs font-medium uppercase text-gray-500">
                  30 Jul, 2023
                </h3>
              </div>

              <div className="flex gap-x-3">
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400"></div>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8">
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                    Final touch ups
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Double check everything and make sure we're ready to go.
                  </p>
                </div>
              </div>
            </div>

            <div className="ps-[7px] flex gap-x-3">
              <button
                type="button"
                className="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium decoration-2 hover:underline"
                id="hs-timeline-collapse-content"
                data-hs-collapse="#hs-timeline-collapse">
                <svg
                  className="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                Show older
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-xl mx-auto p-8">
          <div className="flow-root">
            <ul className="-mb-8">
              <li>
                <div className="relative pb-8">
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                          <svg
                            className="text-white h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-md text-gray-500">
                        <div>
                          <a
                            href="#"
                            className="font-medium text-gray-900 mr-2">
                            v3.1.0
                          </a>

                          <a
                            href="#"
                            className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-green-500"
                                aria-hidden="true"></span>
                            </div>
                            <div className="ml-3.5 font-medium text-gray-900">
                              Feature
                            </div>
                          </a>
                        </div>
                        <span className="whitespace-nowrap text-sm">
                          9h ago
                        </span>
                      </div>
                      <div className="mt-2 text-gray-700">
                        <p>
                          - Improved performance by optimizing database queries.
                          <br />
                          - Enhanced security measures to protect user data.
                          <br />- Streamlined the user interface for a more
                          intuitive experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-8">
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                          <svg
                            className="text-white h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-md text-gray-500">
                        <div>
                          <a
                            href="#"
                            className="font-medium text-gray-900 mr-2">
                            v3.1.0
                          </a>

                          <a
                            href="#"
                            className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-green-500"
                                aria-hidden="true"></span>
                            </div>
                            <div className="ml-3.5 font-medium text-gray-900">
                              Feature
                            </div>
                          </a>
                        </div>
                        <span className="whitespace-nowrap text-sm">
                          9h ago
                        </span>
                      </div>
                      <div className="mt-2 text-gray-700">
                        <p>
                          - Improved performance by optimizing database queries.
                          <br />
                          - Enhanced security measures to protect user data.
                          <br />- Streamlined the user interface for a more
                          intuitive experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-8">
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                          <svg
                            className="text-white h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-md text-gray-500">
                        <div>
                          <a
                            href="#"
                            className="font-medium text-gray-900 mr-2">
                            v3.0.10
                          </a>

                          <a
                            href="#"
                            className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-red-500"
                                aria-hidden="true"></span>
                            </div>
                            <div className="ml-3.5 font-medium text-gray-900">
                              Bug
                            </div>
                          </a>
                        </div>
                        <span className="whitespace-nowrap text-sm">
                          6h ago
                        </span>
                      </div>
                      <div className="mt-2 text-gray-700">
                        <p>
                          - Resolved a critical issue causing crashes on certain
                          devices.
                          <br />
                          - Fixed a login error that prevented some users from
                          accessing their accounts.
                          <br />- Addressed a display glitch causing text
                          overflow in long messages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(./img/tentang_assets/bg_visi_misi.jpg)",
        }}>
        <div className="relative w-full h-auto inset-0 inset-0 bg-black opacity-35">
          <div className="flex flex-col lg:flex-row flex-wrap lg:py-14 sm:gap-x-12 content-center items-center justify-center mx-10 sm:mx-20">
            <div className="mt-10 lg:mt-0">
              <h1>Visi</h1>
            </div>
            <div className="sm:flex-1 sm:shrink sm:mt-4">
              <h1 className="font-raleway text-3xl sm:text-4xl text-ne01 py-4 sm:py-8"></h1>
              <p className="font-montserrat text-lg text-ne01 pb-4"></p>
              <p className="font-montserrat text-lg text-ne01 pb-4"></p>
            </div>
          </div>
        </div>
      </section>
      <Card
        imageContent="./img/service/quotation.jpg"
        contentTitle="Quotation"
        captionText="Beritahu kebutuhan Anda melalui email"
        btnAction="Email"
      />
      <Footer />
    </>
  );
};
