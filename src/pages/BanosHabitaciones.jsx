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
    element: "Espejo",
    finish: "Espejo para baño sin marco 60x45 cm.",
    image: "/images/banos-espejo.png",
  },
  {
    element: "Accesorios",
    finish: "Percha, portarollo y toallero corto en color negro.",
    image: "/images/banos-accesorios.png",
  },
  {
    element: "Sanitario",
    finish: "Sanitario corona redondo blanco. Consumo de agua: 3.8 l/min.",
    image: "/images/banos-sanitario.png",
  },
  {
    element: "División de ducha",
    finish: "Vidrio templado 6mm, accesorios acero inoxidable.",
    image: "/images/banos-division.png",
  },
  {
    element: "Ducha",
    finish: "Ducha cuadrada 25cm negra + mezclador monocontrol.",
    image: "/images/banos-ducha.png",
  },
  {
    element: "Revestimiento en ducha",
    finish: "Piso y una pared: cerámica 30x60 gris grafito oscuro. Otras dos paredes: cerámica 30x60 gris cemento.",
    image: "/images/banos-revestimiento.png",
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
