import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "preline/preline";
import Home from "./pages/Home.tsx";
import Tentang from "./pages/Tentang.tsx";
import Shipping from "./pages/layanan/shipping/Shipping.tsx";
import Marine from "./pages/layanan/marine/Marine.tsx";
import PortService from "./pages/layanan/Port Service.tsx";
import Portofolio from "./pages/Portofolio.tsx";
import Kapal from "./pages/fasilitas/Kapal.tsx";
import Mobil from "./pages/fasilitas/Mobil.tsx";
import Kantor from "./pages/fasilitas/Kantor.tsx";
import Quality from "./pages/Quality.tsx";
import Logistic from "./pages/layanan/Logistic.tsx";
import Konsultan from "./pages/layanan/Konsultan.tsx";
import Husbandry from "./pages/layanan/shipping/Husbandry.tsx";
import ProtectingAgency from "./pages/layanan/shipping/Protecting Agency.tsx";
import Kontak from "./pages/Kontak.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan/shipping" element={<Shipping />} />
        <Route path="/layanan/shipping/husbandry" element={<Husbandry />} />
        <Route
          path="/layanan/shipping/protecting-agency"
          element={<ProtectingAgency />}
        />
        <Route path="/layanan/marine" element={<Marine />} />
        <Route path="/layanan/port-service" element={<PortService />} />
        <Route path="/layanan/logistik" element={<Logistic />} />
        <Route path="/layanan/konsultan" element={<Konsultan />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/fasilitas" element={<Kapal />} />
        <Route path="/fasilitas/mobil" element={<Mobil />} />
        <Route path="/fasilitas/kantor" element={<Kantor />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
