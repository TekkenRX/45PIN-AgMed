import { useState } from "react";
import Filter from "./Filter";


const FilterContainer = () => {
  const [filter, setFilter] = useState([
    { name: "Dr. Carlos Gabriel" },
    { name: "Dr. Andrade Castro" },
    { name: "Dr. Luís Ferreira" },
    { name: "Dra. Camila" },
    { name: "Dr. Junior Lima" },
    { name: "Dr. Chagas" },
    { name: "Dr. Pedro Zanchetti" },
    { name: "Dra. Júlia" },
    { name: "Dra. Tiffany" },
    { name: "Dra. Caroline Cristiane" },
    { name: "Dr. Marcos Caio" },
    { name: "Dr. Hans" },
    { name: "Dr. Lucas Gomes" },
    { name: "Dr. Guilherme Gomes" },
    { name: "Dr. Pedro Silveira" },
    { name: "Dra. Olivia Godo" },
    { name: "Dr. Otto Octavius" },
    { name: "Dr. Salvador" },
    { name: "Dr. Simas" },
    { name: "Dr. Camilo Cunha" },
    { name: "Dr. Irineu Vossenosahb" },
    { name: "Dr. André Felipe" },
    { name: "Dr. Hugo" },
    { name: "Dra. Jordana Almeida" },
    { name: "Dr. Guilherme Souza" },
    { name: "Dr. Parmesão" },
    { name: "Dr. Mussarela" },
    { name: "Dra. Bruna Lúmen" },
    { name: "Dr. Carlos André" },
    { name: "Dr. Fernando Andrade" },
    { name: "Dr. Luís Inácio" },
    { name: "Dra. Camila Bona" },
    { name: "Dr. Carlos Fernando Cruz" },
    { name: "Dr. Samchopança" },
    { name: "Dr. Júlio" },
    { name: "Dra. Gustavo" },
    { name: "Dr. Careca" },
    { name: "Dr. Liminha" },
    { name: "Dr. Pedro Fernando da Silva" },
    { name: "Dra. Yasmim Ferreira" },
    { name: "Dr. Carlos Canastrão" },
    { name: "Dr. Antonio Rubéns" },
    { name: "Dr. Giovanne Macarrone" },
    { name: "Dra. Eduarda" },
  ]);

  return (
    <>
      <div className="filter-container">
        {filter.map((filter) => (
        <Filter filter={filter}></Filter>))}
      </div>
    </>
  );
};

export default FilterContainer;
