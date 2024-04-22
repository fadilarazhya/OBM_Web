import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";

export default () => {
  return (
    <>
      <Navbar />
      <Banner
        bgImage="../img/service/consultant/consultant_jumbotron.jpg"
        headCaption="Kontak"
        captionSection=""
        btnAction="none"
      />

      <Footer />
    </>
  );
};
