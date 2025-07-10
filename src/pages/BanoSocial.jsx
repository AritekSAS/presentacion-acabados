import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const banoSocialFinishes = [
  {
    element: "Mueble lavamanos",
    finish:
      "Empotrado a pared 48×43 cm, sin manijas, diseño minimalista en Tablero MDP acabado roble claro o roble cenizo",
    image: "/images/bano-social-mueble.png",
  },
  {
    element: "Lavamanos",
    finish: "Tipo vessel en mármol sintético blanco",
    image: "/images/bano-social-lavamanos.png",
  },
  {
    element: "Grifería",
    finish: "Grifería Poste Alto Negra",
    image: "/images/bano-social-griferia.png",
  },
  {
    element: "Sanitario",
    finish: "Corona Redondo Blanco, consumo de agua 3.8 l/min",
    image: "/images/bano-social-sanitario.png",
  },
  {
    element: "Espejo",
    finish: "Sin marco 60 x 45 cm",
    image: "/images/bano-social-espejo.png",
  },
  {
    element: "Accesorios",
    finish: "Percha, portarollo y toallero corto negros",
    image: "/images/bano-social-accesorios.png",
  },
];

const BanoSocial = () => {
  return (
    <SpaceDetail
      title="Baño Social"
      imageSrc="/images/render-bano-social.png"
      finishes={banoSocialFinishes}
    />
  );
};

export default BanoSocial;
