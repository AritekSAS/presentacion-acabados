import React from 'react';

const changes = [
  {
    title: 'Baños',
    image: '/images/bano-principal.png',
    note: 'Se ajustó el color de los muebles del baño del primer piso y el de las habitaciones secundarias. En el baño principal también se cambió el mueble por uno de mayor tamaño y se añadió una repisa adicional, tambien se reemplazó el espejo original de 60×45 cm por uno más grande de 60×120 cm, mejorando la funcionalidad visual del baño.',
    cost: '$864.000',
  },
  {
    title: 'Cambio de lavaplatos en la cocina',
    image: '/images/lavaplatos.png',
    note: 'Se reemplazó el lavaplatos sencillo por uno doble con conexión a doble desagüe, para mayor comodidad y funcionalidad.',
    cost: '$200.000',
  },
  {
    title: 'Cambio de estufa',
    image: '/images/estufa.png',
    note: 'Se eligió una estufa con parrillas más estables y seguras, manteniendo el mismo diseño general.',
    cost: '$250.000',
  },
  {
    title: 'Cambio de baranda por lámina perforada',
    image: '/images/lamina.png',
    note: 'Se sustituyó la baranda metálica original por una lámina metálica perforada, con marco externo en tubo cuadrado, manteniendo la seguridad y dando un diseño más limpio.',
    cost: '$800.000',
  },
  {
    title: 'Cambio de color de puertas internas y clósets',
    image: '/images/render-puertas-internas.png',
    note: 'Se personalizó el color de los clósets y puertas internas para unificar el diseño interior.',
    cost: '$500.000',
  },
  {
    title: 'Cambio de guardaescobas de 8 cm a 10 cm',
    image: '/images/render-pisos-general.png',
    note: 'Se optó por un guardaescobas de 10 cm de alto en lugar del original de 8 cm. Este cambio tiene un mayor costo debido a que el guardaescobas de 8 cm venía en packs con descuento. El nuevo guardaescobas de 10 cm se cotiza por unidad sin descuentos.',
    cost: '$1.087.900',
  },
  {
    title: 'Cambio de puerta de fachada',
    image: '/images/puerta.png',
    note: 'Se personalizó el color y diseño de la puerta de entrada.',
    cost: null,
  },
];

const PresentacionAritek = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-gray-800">ARITEK Arquitectura SAS</h1>
        <h2 className="text-xl font-semibold text-gray-800 mt-2">
          Presentación de Costos por Cambios en Acabados
        </h2>
        <p className="mt-4">Estimada cliente,</p>
        <p className="mb-6">
          A continuación, se detallan los costos adicionales derivados de las modificaciones solicitadas en los acabados del proyecto:
        </p>

        {changes.map((change, index) => (
          <div key={index} className="my-8">
            <img
              src={change.image}
              alt={change.title}
              className="w-full max-h-96 object-contain border border-gray-200 rounded"
            />
            <div className="mt-4 bg-gray-100 border rounded p-4 text-gray-800">
              <p className="mb-2">{change.note}</p>
              <p className="font-semibold">
                {change.cost ? `Costo adicional: ${change.cost}` : 'Este cambio no tiene costo adicional'}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-12">
          <p>Quedamos atentos a su aprobación para proceder con los cambios.</p>
          <p>Cordialmente,</p>
          <p>
            <strong>Equipo ARITEK Arquitectura SAS</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresentacionAritek;

