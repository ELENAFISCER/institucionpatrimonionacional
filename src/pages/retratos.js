import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby";
import imagenFelipecapitan from "/src/images/felipecapitan.jpg";







const Retratos = () => (
  <Layout>
  <Link></Link>
    <h1>RETRATOS</h1>
    <img src={imagenFelipecapitan} alt="Imagen de Felipe Capitan" width= "400px"/>
  
  </Layout>
);


export const Head = () => <Seo title="Home" />;

export default Retratos;