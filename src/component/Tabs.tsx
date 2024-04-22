import Card from "./Card";
import ImageSlide from "./ImageSlide";
import "slick-carousel/slick/slick.css";

function Tabs() {
  return (
    <>
      <div className="max-w-[85rem] mx-8 my-6 border-b border-transparent">
        <nav
          className="-mb-0.5 flex justify-start sm:justify-center space-x-10"
          aria-label="Tabs"
          role="tablist">
          <button
            type="button"
            className="font-montserrat font-medium sm:text-base hs-tab-active:font-medium hs-tab-active:border-pr03 hs-tab-active:text-sc06 py-4 px-1 inline-flex items-center gap-x-2 border-b border-pr08 sm:border-transparent text-sm whitespace-nowrap text-ne02 hover:text-sc06 focus:outline-none focus:text-pr08 disabled:opacity-50 disabled:pointer-events-none active"
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab">
            Shipping Agency
          </button>
          <button
            type="button"
            className="font-montserrat font-medium sm:text-base hs-tab-active:font-medium hs-tab-active:font-medium hs-tab-active:border-pr03 hs-tab-active:text-sc06 py-4 px-1 inline-flex items-center gap-x-2 border-b border-pr08 sm:border-transparent text-sm whitespace-nowrap text-ne02 hover:text-sc06 focus:outline-none focus:text-pr08 disabled:opacity-50 disabled:pointer-events-none"
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab">
            Husbandry Service
          </button>
          {/* <button
            type="button"
            className="font-montserrat font-medium hs-tab-active:font-medium hs-tab-active:border-pr03 hs-tab-active:text-sc06 py-4 px-1 inline-flex items-center gap-x-2 border-b border-pr08 sm:border-transparent text-sm whitespace-nowrap text-ne02 hover:text-sc06 focus:outline-none focus:text-pr08 disabled:opacity-50 disabled:pointer-events-none"
            id="horizontal-alignment-item-3"
            data-hs-tab="#horizontal-alignment-3"
            aria-controls="horizontal-alignment-3"
            role="tab">
            Protecting Agency
          </button>
          <button
            type="button"
            className="font-montserrat font-medium hs-tab-active:font-medium hs-tab-active:border-pr03 hs-tab-active:text-sc06 py-4 px-1 inline-flex items-center gap-x-2 border-b border-pr08 sm:border-transparent text-sm whitespace-nowrap text-ne02 hover:text-sc06 focus:outline-none focus:text-pr08 disabled:opacity-50 disabled:pointer-events-none"
            id="horizontal-alignment-item-4"
            data-hs-tab="#horizontal-alignment-4"
            aria-controls="horizontal-alignment-4"
            role="tab">
            Launch Service
          </button>
          <button
            type="button"
            className="font-montserrat font-medium hs-tab-active:font-medium hs-tab-active:border-pr03 hs-tab-active:text-sc06 py-4 px-1 inline-flex items-center gap-x-2 border-b border-pr08 sm:border-transparent text-sm whitespace-nowrap text-ne02 hover:text-sc06 focus:outline-none focus:text-pr08 disabled:opacity-50 disabled:pointer-events-none"
            id="horizontal-alignment-item-5"
            data-hs-tab="#horizontal-alignment-5"
            aria-controls="horizontal-alignment-5"
            role="tab">
            Emergency Response
          </button> */}
        </nav>
      </div>

      <div className="mt-3 mx-6">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1">
          <p className="font-montserrat text-lg text-ne02 pb-4">
            Mewakili pemilik kapal atau pen-charter untuk mengurus kepentingan
            kapal asing atau kapal nasional secara profesional selama berada di
            suatu pelabuhan Indonesia berdasarkan perjanjian kerja sama.
          </p>
          <p className="font-montserrat text-lg text-ne02 mb-4">
            Kami berpengalaman menangani kapal General cargo, tanker, Kapal
            Pesiar, kapal Supply, Tugboat dan Tongkang, Crew Boat, Container,
            termasuk kapal offshore, kapal ro-ro, kapal perang, tetapi tidak
            terbatas pada kegiatan bongkar muat di pelabuhan atau Ship to Ship
            dengan berbagai layanan pelengkap yang mencakup hub agency,
            husbandry, bunker fuel supplies, ship spares logistics, underwater
            hull cleaning, emergency handling, dll.
          </p>
          <div className="flex flex-col lg:flex-row flex-wrap sm:gap-x-6 items-center lg:items-start justify-center">
            <div className="">
              <img
                className="object-cover h-fit w-fit sm:w-80"
                src="../img/service/shipping/shipping_agency/Caption.jpg"
              />
            </div>
            <div className="flex-1 flex-grow mt-4">
              <p className="font-montserrat text-lg text-ne02">
                Jenis service yang kami tawarkan meliputi :
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  <strong>1. Port Agent</strong> <br />
                  Bertanggung jawab kepada pemilik kapal atau General Agent
                  sehubungan dengan CIQP In/Out Clearance kapal serta
                  berkomunikasi dengan instansi terkait di wilayah pelabuhan
                  dimana kapal melaksanakan kegiatan.
                </p>
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  <strong>2. General Agent</strong>
                  <br />
                  Bertanggung jawab pada pemilik atau penyewa dengan menunjuk
                  Agen Lokal untuk mengatur perkerjaan port agent.
                </p>
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  <strong>3. Owner Protecting Agent</strong>
                  <br />
                  Layanan kami tak terbatas pada port agent dan general agent,
                  tetapi kami dapat berperan sebagai perwakilan owner untuk
                  melaksanakan pengawasan terhadap suatu pekerjaan tertentu
                  untuk melindungi kepentingan pemilik kapal di suatu wilayah
                  kerja pelabuhan.
                </p>
              </p>
            </div>
          </div>
          <div className="my-20">
            <ImageSlide />
          </div>
        </div>
        <div
          id="horizontal-alignment-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2">
          <p className="font-montserrat text-lg text-ne02 pb-4">
            Hindari biaya yang tinggi dan maksimalkan operasional kapal anda
            dengan melakukan pelayaran tanpa harus berlabuh hanya untuk menunggu
            pergantian crew, pengiriman suku cadang atau perbekalan.
          </p>
          <p className="font-montserrat text-lg text-ne02 pb-4">
            OBM menyediakan layanan transportasi terintegrasi mulai penjemputan
            dari bandara ke pelabuhan sampai di kapal, di antaranya kebutuhan
            suku cadang, perbekalan, pergantian crew, pengantaran superintendent
            dan teknisi, termasuk pengurusan izin, dimana kapal tidak harus
            menunggu di suatu Pelabuhan. Layanan tersebut termasuk diantaranya
            sebagai berikut :
          </p>
          <div className="flex flex-col lg:flex-row flex-wrap sm:gap-x-8 items-center lg:items-start justify-center">
            <div className="">
              <img
                className="object-cover h-fit w-fit sm:w-80"
                src="./img/service/shipping/shipping_agency/Caption.jpg"
              />
            </div>
            <div className="flex-1 flex-grow mt-8">
              <p className="font-montserrat text-lg text-ne02 pb-6">
                <ul className="list-disc">
                  <li>
                    {" "}
                    Pengurusan Klaim Bagasi dan Barang, Akomodasi hotel, izin
                    pendaratan, mobilisasi darat dan laut, perizinan, perobatan
                    dan lain-lain. Biro komunikasi dengan petugas daerah.
                  </li>
                  <li>
                    Pengiriman uang tunai dan Dokumen, izin supply suku cadang
                    kapal di wilayah perairan atau pelabuhan Indonesia.
                  </li>
                  <li>
                    Penanganan tanggap darurat, pengisian bahan bakar, pelumas,
                    dan bahan kimia tertentu.
                  </li>
                  <li>
                    Pengisian Air Bersih, perlengkapan crew, dan bahan baku
                    makanan.
                  </li>
                  <li>
                    Pengiriman kontraktor dan teknisi untuk dukungan perbaikan.
                  </li>
                  <li>Tenaga Pengamanan.</li>
                </ul>
              </p>
              <p className="font-montserrat text-lg text-ne02 pb-6">
                Untuk layanan tersebut kami didukung dengan armada dan SDM :
                <ul className="list-disc">
                  <li>
                    MPV Kapasitas 4 hingga 36 Penumpang Kelas Bisnis dan
                    Eksekutif
                  </li>
                  <li>MPV Kapasitas 8 Penumpang kelas Eksekutif</li>
                  <li>
                    Truck dan trailer dengan berbagai ukuran dan kapasitas
                    standar maupun ukuran Ekstra
                  </li>
                  <li>
                    Speed Boat Kapasitas 4 Hingga 50 Penumpang Kelas Bisnis dan
                    Eksekutif
                  </li>
                  <li>
                    Mitra bisnis yang memiliki kemampuan sebagai pemasok
                    kebutuhan sesuai permintaan mulai dari pengadaan kapal
                    pendukung dan teknisi hingga dukungan logistik retail suku
                    cadang
                  </li>
                  <li>Penyediaan Tenaga Security berpengalaman</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div
          id="horizontal-alignment-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-3">
          <p className="font-montserrat text-ne02">
            This is the{" "}
            <em className="font-montserrat font-semibold text-ne02">third</em>{" "}
            item's tab body.
          </p>
        </div>
        <div
          id="horizontal-alignment-4"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-4">
          <p className="font-montserrat text-ne02">
            This is the{" "}
            <em className="font-semibold font-montserrat text-ne02">fourth</em>{" "}
            item's tab body.
          </p>
        </div>
        <div
          id="horizontal-alignment-5"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-5">
          <p className="font-montserrat text-ne02">
            This is the{" "}
            <em className="font-semibold font-montserrat text-ne02">fifth</em>{" "}
            item's tab body.
          </p>
        </div>
      </div>
      <div className="bg-pr08">
        <Card
          imageContent="../img/service/offering.JPG"
          contentTitle="Ajukan Permintaan Penawaran"
          captionText="Kami siap 24 jam untuk membantu Anda"
          captionText1="Telp : +62 2974 3107 Fax : +62 2974 3107 HP : +628121919822 Mail :
            enquiries@orelabahari.co.id"
          btnAction="Offering"
        />
      </div>
    </>
  );
}

export default Tabs;
