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
      image: "/images/cocina-mueble.png",
    },
    {
      element: "Mesón",
      finish: "Granito negro pulido",
      image: "/images/cocina-meson.jpeg",
    },
    {
      element: "Lavaplatos",
      finish: "Lavaplatos De Sobreponer 53x43 Cm Inox",
      image: "/images/cocina-lavaplatos.png",
    },
    {
      element: "Manijas",
      finish: "Manija Cajón Tubular/cilíndrica Liviana",
      image: "/images/cocina-manijas.png",
    },
  ];
    const puertasFachadasFinishes = [
    {
      element: "Puerta principal",
      finish: "Puerta en madera pintada verde con cerradura negra mate con manija y llave",
      image: "/images/puerta-principal.png",
    },
    {
      element: "Puerta lateral",
      finish: "Puerta en madera pintada verde con cerradura negra mate con manija y llave",
      image: "/images/puerta-lateral.png",
    },
    {
      element: "Puerta terraza",
      finish: "Puerta en madera pintada verde con cerradura de manija negra",
      image: "/images/puerta-terraza.png",
    },
  ];
    const puertasInternasFinishes = [
    {
      element: "Laminado",
      finish: "Tablero MDP con recubrimiento melánico acabado en roble claro o roble cenizo. Tono beige grisáceo con vetas suaves que imitan la textura de la madera.",
      image: "/images/Laminados.jpg",
    },
    {
      element: "Cerradura",
      finish: "Chapa de manija negra",
      image: "/images/cerradura-puerta-interna.png",
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
              imageSrc="/Public/images/cocina-render.png"
              finishes={cocinaFinishes}
            />
          }
        />
        <Route
          path="/espacios/puertas-fachadas"
          element={
            <SpaceDetail
              title="Puertas Fachadas"
              imageSrc="/images/render-puertas-fachadas.png"
              finishes={puertasFachadasFinishes}
            />
          }
        />
        <Route
          path="/espacios/puertas-internas"
          element={
            <SpaceDetail
              title="Puertas Internas"
              imageSrc="/images/render-puertas-internas.png"
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



