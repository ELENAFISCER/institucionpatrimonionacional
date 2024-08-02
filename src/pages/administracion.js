import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby";






const Administracion = () => (
  <Layout>
  <Link></Link>
    <h1>ADMINISTRACION</h1>
<p>Patrimonio Nacional, como organismo público responsable de los bienes de titularidad del Estado que proceden del legado de la Corona española recogidos en la Ley 23/1982, de 16 de junio, del Patrimonio Nacional, tiene como fines principales el apoyo a la Jefatura del Estado para la alta representación que la Constitución y las leyes le atribuyen, así como la puesta a disposición de los ciudadanos del patrimonio histórico-artístico que gestiona a través de su uso con fines culturales, científicos y docentes.

Esta institución gestiona 24 Palacios, Monasterios, Conventos Reales y edificaciones anexas, abiertas a la visita pública, que constituyen la red de Reales Sitios, y que albergan más de 160.000 bienes muebles histórico-artísticos de todas las disciplinas (pintura, escultura, tapices, relojes, orfebrería, archivos, bibliotecas, instrumentos musicales y mobiliario, entre otros) que constituyen una parte esencial del patrimonio cultural español al estar firmadas por los mejores artistas de todas las épocas. A ello se une un importante patrimonio natural constituido por jardines históricos, bosques y otros espacios naturales que, juntos, alcanzan 22.000 hectáreas y albergan gran cantidad de fauna salvaje.</p>


  
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default Administracion;