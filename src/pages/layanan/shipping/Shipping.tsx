import Navbar from "../../../component/Navbar";
import Tabs from "../../../component/Tabs";
import Banner from "../../../component/Banner";
import Footer from "../../../component/Footer";
import ImageSlide from "../../../component/ImageSlide";
import Card from "../../../component/Card";

export default () => {
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/service/shipping/shipping_agency/Shipping_Agency_Jumbotron.jpg"
        headCaption="Shipping"
        captionSection="Melayani clearence CIQP dan sebagai mata rantai logistik kebutuhan kapal"
        btnAction="none"
      />

      <div className="relative mb-20">
        <section className="bg-white overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
                <p className="font-montserrat text-base lg:text-lg text-ne02 pb-6">
                  Mewakili pemilik kapal atau pen-charter untuk mengurus
                  kepentingan kapal asing atau kapal nasional secara profesional
                  selama berada di suatu pelabuhan Indonesia berdasarkan
                  perjanjian kerja sama.
                </p>
                <p className="font-montserrat text-lg text-ne02 pb-6">
                  Kami berpengalaman menangani kapal General cargo, tanker,
                  Kapal Pesiar, kapal Supply, Tugboat dan Tongkang, Crew Boat,
                  Container, termasuk kapal offshore, kapal ro-ro, kapal perang,
                  tetapi tidak terbatas pada kegiatan bongkar muat di pelabuhan
                  atau Ship to Ship dengan berbagai layanan pelengkap yang
                  mencakup hub agency, husbandry, bunker fuel supplies, ship
                  spares logistics, underwater hull cleaning, emergency
                  handling, dll.
                </p>
                <p className="font-montserrat text-lg text-ne01 pb-6">
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
                      Bertanggung jawab pada pemilik atau penyewa dengan
                      menunjuk Agen Lokal untuk mengatur perkerjaan port agent.
                    </p>
                    <p className="font-montserrat text-lg text-ne02 pb-6">
                      <strong>3. Owner Protecting Agent</strong>
                      <br />
                      Layanan kami tak terbatas pada port agent dan general
                      agent, tetapi kami dapat berperan sebagai perwakilan owner
                      untuk melaksanakan pengawasan terhadap suatu pekerjaan
                      tertentu untuk melindungi kepentingan pemilik kapal di
                      suatu wilayah kerja pelabuhan.
                    </p>
                  </p>
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src="../img/service/shipping/shipping_agency/Caption.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageSlide />
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
      <Footer />
    </>
  );
};