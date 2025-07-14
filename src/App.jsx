import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import IntroAcabados from './pages/Acabados';
import SpaceMenu from './pages/SpaceMenu';
import Summary from './pages/Summary';
import Cocina from './pages/Cocina';
import PuertasFachadas from './pages/puertas-fachadas';
import PisosGeneral from './pages/PisosGeneral';
import PisosExternos from './pages/PisosExternos';
import AreaServicio from './pages/AreaServicio';
import BanoSocial from './pages/BanoSocial';
import BanosHabitaciones from './pages/BanosHabitaciones';
import Closets from './pages/Closets';
import PuertasInternas from './pages/PuertasInternas';

export default function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acabados" element={<IntroAcabados />} />
        <Route path="/espacios" element={<SpaceMenu />} />       
        <Route path="/espacios" element={<SpaceMenu />} /> {/* ✅ Agregada */}
        <Route path="/summary" element={<Summary />} />
        <Route 
          path="/espacios/cocina" 
          element={<Cocina />} 
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



