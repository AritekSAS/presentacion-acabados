import React from 'react';

const PresentacionAritek = () => {
  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      background: "#f4f4f4",
      margin: 0,
      padding: 0,
      minHeight: '100vh',
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "30px auto",
        background: "#fff",
        padding: "40px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ color: "#444" }}>ARITEK Arquitectura SAS</h1>
        <h2 style={{ color: "#444" }}>Presentación de Costos por Cambios en Acabados</h2>
        <p>Estimada cliente,</p>
        <p>A continuación, se detallan los costos adicionales derivados de las modificaciones solicitadas en los acabados del proyecto:</p>

        <ul style={{ paddingLeft: "20px" }}>
          <li><strong style={{ color: "#2c3e50" }}>Cambio de color en muebles y puertas</strong>: De fresno europeo a Austral.</li>
          <li><strong style={{ color: "#2c3e50" }}>Baño principal</strong>: Cambio de mueble flotante a mueble al piso, con repisa sobre el sanitario y espejo de 60x90 cm.</li>
        </ul>
        <div style={{ margin: "30px 0" }}>
          <img src="/images/bano-principal.png" alt="Baño principal" style={imgStyle} />
          <p style={captionStyle}>Imagen referencial propuesta de mueble y espejo para baño principal</p>
        </div>

        <ul style={{ paddingLeft: "20px" }}>
          <li><strong style={{ color: "#2c3e50" }}>Cocina</strong>: Cambio a lavaplatos doble tanque con doble desagüe.</li>
        </ul>
        <div style={{ margin: "30px 0" }}>
          <img src="/images/lavaplatos.png" alt="Lavaplatos doble tanque" style={imgStyle} />
          <p style={captionStyle}>Lavaplatos doble tanque 80x43 cm en acero inoxidable</p>
        </div>
        <div style={{ margin: "30px 0" }}>
          <img src="/images/estufa.png" alt="Estufa empotrable" style={imgStyle} />
          <p style={captionStyle}>Estufa empotrable de gas natural 60x43 cm cristal negro</p>
        </div>

        <ul style={{ paddingLeft: "20px" }}>
          <li><strong style={{ color: "#2c3e50" }}>Baranda interna</strong>: Sustitución por lámina perforada decorativa.</li>
        </ul>
        <div style={{ margin: "30px 0" }}>
          <img src="/images/lamina.png" alt="Lámina decorativa" style={imgStyle} />
          <p style={captionStyle}>Diseño decorativo propuesto para reemplazo de baranda interna</p>
        </div>

        <ul style={{ paddingLeft: "20px" }}>
          <li><strong style={{ color: "#2c3e50" }}>Cambio de guardaescobas</strong>: De 8 cm a 10 cm en toda la vivienda.</li>
          <li><strong style={{ color: "#2c3e50" }}>Puertas exteriores, interiores y closets</strong>: Aumento de costo por cambio de color y material.</li>
        </ul>
        <div style={{ margin: "30px 0" }}>
          <img src="/images/puerta.png" alt="Puerta exterior madera" style={imgStyle} />
          <p style={captionStyle}>Puerta exterior en madera natural (sin pintura)</p>
        </div>

        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px"
        }}>
          <thead>
            <tr>
              <th style={thStyle}>Concepto</th>
              <th style={thStyle}>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tdStyle}>Baños (mueble, repisa, espejo)</td><td style={tdStyle}>$2.000.000</td></tr>
            <tr><td style={tdStyle}>Cocina (lavaplatos doble)</td><td style={tdStyle}>$1.000.000</td></tr>
            <tr><td style={tdStyle}>Baranda (lámina decorativa)</td><td style={tdStyle}>$800.000</td></tr>
            <tr><td style={tdStyle}>Puertas exteriores, interiores y closets</td><td style={tdStyle}>$4.500.000</td></tr>
            <tr>
              <td style={{ ...tdStyle, fontWeight: "bold", textAlign: "right" }}>TOTAL</td>
              <td style={{ ...tdStyle, fontWeight: "bold" }}>$8.300.000</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: "50px" }}>
          <p>Quedamos atentos a su aprobación para proceder con los cambios.</p>
          <p>Cordialmente,</p>
          <p><strong>Equipo ARITEK Arquitectura SAS</strong></p>
        </div>
      </div>
    </div>
  );
};

// Estilos compartidos
const imgStyle = {
  width: "100%",
  maxHeight: "400px",
  objectFit: "contain",
  border: "1px solid #ddd",
  padding: "5px",
  background: "#fff"
};

const captionStyle = {
  fontStyle: "italic",
  color: "#555",
  marginTop: "5px"
};

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  backgroundColor: "#eaeaea",
  textAlign: "left"
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left"
};

export default PresentacionAritek;

