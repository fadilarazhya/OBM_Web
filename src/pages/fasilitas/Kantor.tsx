import Banner from "../../component/Banner";
import Card from "../../component/Card";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import FasilitasCard from "../../component/fasilitas/FasilitasCard";

export default () => {
  const column1 = [
    { header: "Name", accessor: "name" },
    { header: "Col", accessor: "col" },
    { header: "Desc", accessor: "desc" },
  ];
  const data1 = [
    { name: "Brand ", col: ":", desc: "Toyota " },
    { name: "Capacity", col: ":", desc: "16 pax" },
    { name: "Year ", col: ":", desc: "2019" },
    { name: "Total unit", col: ":", desc: "10 units" },
  ];
  const column2 = [
    { header: "Name", accessor: "name" },
    { header: "Col", accessor: "col" },
    { header: "Desc", accessor: "desc" },
  ];
  const data2 = [
    { name: "Brand ", col: ":", desc: "Isuzu " },
    { name: "Capacity", col: ":", desc: "4 persons" },
    { name: "Year ", col: ":", desc: "2015" },
    { name: "Total unit", col: ":", desc: "4 units" },
  ];
  const column3 = [
    { header: "Name", accessor: "name" },
    { header: "Col", accessor: "col" },
    { header: "Desc", accessor: "desc" },
  ];
  const data3 = [
    { name: "Brand", col: ":", desc: "Daihatsu" },
    { name: "Year", col: ":", desc: "2023" },
  ];

  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/fasilitas_assets/fasilitas_banner.jpg"
        headCaption="Fasilitas"
        captionSection="Armada pendukung"
      />
      <FasilitasCard
        imgAsset="../img/fasilitas_assets/kantor.jpeg"
        asstType="Owned"
        asstName="OBM Main Office"
        col={column1}
        data={data1}
      />
      <Card
        imageContent="../img/service/offering.JPG"
        contentTitle="Ajukan Permintaan Penawaran"
        captionText="Kami siap 24 jam untuk membantu Anda"
        captionText1="Telp : +62 2974 3107 Fax : +62 2974 3107 HP : +628121919822 Mail :
            enquiries@orelabahari.co.id"
        btnAction="Offering"
      />
      <Footer />
    </>
  );
};
