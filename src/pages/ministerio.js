import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import imagenMinisterio from "/src/images/ministerio.jpg";
import imagenMinisterio1 from "/src/images/ministerio1.png";

const Ministerio = () => (
  <Layout>
    <Link></Link>
    
    <div style={{ width: "100%", marginBottom: "20px" }}>
      <img
        src={imagenMinisterio1}
        alt="Imagen Cabecera"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  
    <h1>MINISTERIO</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    <p style={{ textAlign: "justify" }}>
  El Consejo de Ministros fue creado por el Real Decreto de 19 de noviembre
  de 1823, dictado por Fernando VII y dirigido al ministro de Estado Víctor
  Sáez. Desde su nacimiento, en el contexto histórico del Absolutismo, la
  motivación para la creación del Consejo de Ministros fue establecer un
  despacho colectivo para los «asuntos de utilidad general», a fin de que
  hubiera en ellos uniformidad de criterio y pudieran ser abordados con
  mayor celeridad.

  El despacho del Rey con sus secretarios o ministros fue un proceso en
  principio particular y secreto que, ante la conveniencia de coordinar una
  gestión dispersa y de fortalecer la uniformidad de criterio, no podía sino
  desembocar en la institucionalización del Consejo de Ministros...
</p>


<img
  src={imagenMinisterio}
  alt="Imagen"
  style={{ maxWidth: "55%", height: "auto", margin: "20px auto", display: "block" }}
/>
Félix Bolaños se reúne con Mariano Jabonero, secretario general de la OEI

El ministro de la Presidencia, Justicia y Relaciones con las Cortes, Félix Bolaños, se ha reunido con Mariano Jabonero, secretario general de la Organización de Estados Iberoamericanos para la Educación, la Ciencia y la Cultura (OEI)
    </div>
  </Layout>
);

export const Head = () => <Seo title="Ministerio" />;

export default Ministerio;
