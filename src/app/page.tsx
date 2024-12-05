import Image from "next/image";
import styles from "./page.module.css";
import FormularioPeliculas from "./FormulariPelicula";

export default function Home() {
  return (
    <>
    <h1>hola</h1>
    <p style={ { backgroundColor :'red '}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, dolorum. Maxime cupiditate pariatur, iusto, deleniti sequi molestias adipisci, laudantium fuga aperiam veritatis porro deserunt commodi autem ratione illum exercitationem officiis!</p>
    <FormularioPeliculas/>
    </>
  );
}
