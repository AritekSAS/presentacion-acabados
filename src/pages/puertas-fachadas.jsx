import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const puertasFachadasData = [
  {
    element: 'Cerradura puertas de ingreso (frontal y lateral)',
    finish:
      'Cerradura de seguridad negra mate con manija larga. Diseño contemporáneo, resistente a la oxidación, con sistema de llave. Ideal para uso exterior.',
    image:
      'https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/cerradura-ingreso.png?raw=true',
  },
  {
    element: 'Cerradura puerta balcón habitación secundaria',
    finish:
      'Cerradura negra tipo alcoba, con cilindro de bronce y escudo metálico. Incluye juego de llaves. Estética moderna y funcional.',
    image:
      'https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/cerradura-habitaciones.png?raw=true',
  },
];

const PuertasFachadas = () => {
  return (
    <SpaceDetail
      title="Puertas de Fachada"
      imageSrc="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/render-puertas-fachadas.png?raw=true"
      finishes={puertasFachadasData}
      note={`🟢 Nota: Las puertas de fachada se entregan con marcos en color negro y acabado verde oliva, como propuesta estética del diseño.
Este acabado aplica para tres puertas: la puerta principal de ingreso frontal, la puerta lateral de acceso al área de servicio,
y la puerta de salida al balcón desde la habitación secundaria.
El cliente puede escoger otro color sin costo adicional, sujeto a disponibilidad y validación previa.`}
      />
  );
};

export default PuertasFachadas;
