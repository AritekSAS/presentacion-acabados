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
    const puertasFachadasFinishes = [
    {
      element: "Puerta principal",
      finish: "Puerta en madera pintada verde con cerradura negra mate con manija y llave",
      image: "https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/puerta-principal.png?raw=true",
    },
    {
      element: "Puerta lateral",
      finish: "Puerta en madera pintada verde con cerradura negra mate con manija y llave",
      image: "https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/puerta-lateral.png?raw=true",
    },
    {
      element: "Puerta terraza",
      finish: "Puerta en madera pintada verde con cerradura de manija negra",
      image: "https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/puerta-terraza.png?raw=true",
    },
  ];
    const puertasInternasFinishes = [
    {
      element: "Laminado",
      finish: "Tablero MDP con recubrimiento melánico acabado en roble claro o roble cenizo. Tono beige grisáceo con vetas suaves que imitan la textura de la madera.",
      image: "https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/Laminados.png?raw=true",
    },
    {
      element: "Cerradura",
      finish: "Chapa de manija negra",
      image: "https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/cerradura-puerta-interna.png?raw=true",
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
          element={
            <SpaceDetail
              title="Puertas Fachadas"
              imageSrc="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/render-puertas-fachadas.png?raw=true"
              finishes={puertasFachadasFinishes}
            />
          }
        />
        <Route
          path="/espacios/puertas-internas"
          element={
            <SpaceDetail
              title="Puertas Internas"
              imageSrc="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/render-puertas-internas.png?raw=true"
              finishes={puertasInternasFinishes}
            />
          }
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



