import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const puertasFachadasData = [
  {
    element: 'Puertas de ingreso y de balcón',
    finish:
      'Hoja de Puerta color verde oliva y marco negro, con chapa negra',
    image:
      '/images/puertas-fachada.png',
  },
  {
    element: 'Cerradura puertas de ingreso (frontal y lateral)',
    finish:
      'Cerradura de seguridad negra mate con manija larga. Diseño contemporáneo, resistente a la oxidación, con sistema de llave. Ideal para uso exterior.',
    image:
      '/images/cerradura-ingreso.png',
  },
  {
    element: 'Cerradura puerta balcón habitación secundaria',
    finish:
      'Cerradura negra. Incluye juego de llaves. Estética moderna y funcional.',
    image:
      '/images/cerradura-habitaciones.png',
  },
];

const PuertasFachadas = () => {
  return (
    <SpaceDetail
      title="Puertas de Fachada"
      imageSrc="/images/render-puertas-fachadas.png"
      finishes={puertasFachadasData}
      note={`🟢 Nota: Las puertas de fachada se entregan con marcos en color negro y acabado verde oliva, como propuesta estética del diseño.
Este acabado aplica para tres puertas: la puerta principal de ingreso frontal, la puerta lateral de acceso al área de servicio,
y la puerta de salida al balcón desde la habitación secundaria.
El cliente puede escoger otro color sin costo adicional, sujeto a disponibilidad y validación previa.`}
      />
  );
};

export default PuertasFachadas;
