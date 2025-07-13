import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SpaceMenu from './pages/SpaceMenu';
import Summary from './pages/Summary';
import SpaceDetail from './components/SpaceDetail';
import PuertasFachadas from './pages/puertas-fachadas';
import PisosGeneral from './pages/PisosGeneral';
import PisosExternos from './pages/PisosExternos';
import AreaServicio from './pages/AreaServicio';
import BanoSocial from './pages/BanoSocial';
import BanosHabitaciones from './pages/BanosHabitaciones';
import Closets from './pages/Closets';
import PuertasInternas from './pages/PuertasInternas';

export default function App() {
    const cocinaFinishes = [
    {
      element: "Muebles",
      finish: "Tablero MDP, con recubrimiento melánico color HUMO mate",
      image: "https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/cocina-mueble.png?raw=true",
    },
    {
      element: "Mesón",
      finish: "Granito negro San Gabriel",
      image: "https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/cocina-meson.png?raw=true",
    },
    {
      element: "Lavaplatos",
      finish: "Lavaplatos De Sobreponer 53x43 Cm Inox",
      image: "https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/cocina-lavaplatos.png?raw=true",
    },
    {
      element: "Manijas",
      finish: "Manija Cajón Tubular/cilíndrica Liviana",
      image: "https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/cocina-manijas.png?raw=true",
    },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/espacios" element={<SpaceMenu />} /> {/* ✅ Agregada */}
        <Route path="/summary" element={<Summary />} />
        <Route
          path="/espacios/cocina"
          element={
            <SpaceDetail
              title="Cocina"
              imageSrc="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/cocina-render.png?raw=true"
              finishes={cocinaFinishes}
            />
          }
        />
        <Route
          path="/espacios/puertas-fachadas"
          element={<PuertasFachadas />}
        />
        <Route
          path="/espacios/puertas-internas"
          element={<PuertasInternas />}
        />
        <Route
          path="/espacios/pisos-general"
          element={<PisosGeneral />}
        />
        <Route
          path="/espacios/pisos-externos"
          element={<PisosExternos />}
        />
        <Route
          path="/espacios/area-servicio"
          element={<AreaServicio />}
        />
        <Route
          path="/espacios/bano-social"
          element={<BanoSocial />}
        />
        <Route
          path="/espacios/banos-habitaciones"
          element={<BanosHabitaciones />}
        />
        <Route
          path="/espacios/closets"
          element={<Closets />}
        />
      </Routes>
    </Router>
  );
}



