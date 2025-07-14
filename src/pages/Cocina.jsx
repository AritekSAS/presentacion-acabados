import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const cocinaData = [
  {
    element: "Muebles",
    finish: "Tablero MDP, con recubrimiento melánico color HUMO mate",
    image: "/images/cocina-mueble.png",
  },
  {
    element: "Mesón",
    finish: "Granito negro San Gabriel",
    image: "/images/cocina-meson.png",
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

const Cocina = () => {
  return (
    <SpaceDetail
      title="Cocina"
      imageSrc="/images/render-cocina2.png"
      finishes={cocinaData}
    />
  );
};
export default Cocina;
