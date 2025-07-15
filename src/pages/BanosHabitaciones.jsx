import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const finishes = [
  {
    element: "Mueble de lavamanos",
    finish: "Mueble de empotrar a pared 79×48 cm sin manijas, diseño minimalista compatible con cajón y nicho organizador. Tablero MDP acabado roble claro o cenizo.",
    image: "/images/banos-mueble.png",
  },
  {
    element: "Lavamanos",
    finish: "Lavamanos tipo vessel en mármol sintético blanco.",
    image: "/images/banos-lavamanos.png",
  },
  {
    element: "Grifería",
    finish: "Grifería Para Lavamanos Monocontrol Alta Negra.",
    image: "/images/banos-griferia.png",
  },
  {
    element: "Accesorios",
    finish: "Percha, portarollo y toallero corto en color negro.",
    image: "/images/banos-accesorios.png",
  },
  {
    element: "Revestimiento en ducha (claro)",
    finish: "Cerámica 30x60 gris cemento para dos paredes.",
    image: "/images/banos-revestimiento-claro.png",
  },
  {
    element: "Revestimiento en ducha (oscuro)",
    finish: "Cerámica 30x60 gris grafito oscuro para piso y pared restante.",
    image: "/images/banos-revestimiento-oscuro.png",
  },
];

const BanosHabitaciones = () => {
  return (
    <SpaceDetail
      title="Baños Habitaciones"
      imageSrc="/images/render-bano-principal.png"
      finishes={finishes}
    />
  );
};

export default BanosHabitaciones;
