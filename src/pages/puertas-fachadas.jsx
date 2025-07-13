import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const puertasFachadasData = [
  {
    element: 'Puerta Principal',
    finish: 'Puerta de ingreso principal frente de la casa, con cerradura mate con manija y llave',
    image: 'https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/puerta-principal.png?raw=true',
  },
  {
    element: 'Puerta Lateral (entrada secundaria)',
    finish: 'Puerta de ingreso lateral a area de servicio, con cerradura negra mate con manija y llave',
    image: 'https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/puerta-lateral.png?raw=true',
  },
  {
    element: 'Puerta Terraza habitación secundaria',
    finish: 'Puerta salida a la terraza con cerradura chapa de manija negra',
    image: 'https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/puerta-terraza.png?raw=true',
  },
];

const PuertasFachadas = () => {
  return (
    <SpaceDetail
      title="Puertas de Fachada"
      imageSrc="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/render-puertas-fachadas.png?raw=true"
      finishes={puertasFachadasData}
      note="🟩 Nota: Las puertas de las fachadas se entregan pintadas en color verde oliva y los marcos en color negro."
      extraNote="🟢 Nota: El color verde oliva es una propuesta estética opcional. El cliente puede escoger otro color sin costo adicional, sujeto a disponibilidad y validación previa."
      />
  );
};

export default PuertasFachadas;
