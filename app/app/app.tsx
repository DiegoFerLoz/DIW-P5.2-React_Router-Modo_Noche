import Header from "~/components/header/header";
import Profile from "~/components/profile/profile";
import Card from "~/components/card/card";
import type { Persona } from "~/types/persona";

export function App() {
  const persona: Persona = {
    name: "35",
    age: "Married, 2 kids",
    education: "University of Calgary",
    location: "Calgary, Alberta",
    job: "Family Physician",
    hobbies: "Hiking and dancing"
  }


  return (
    // Sistema de grid de 12 columnas. La mejor forma que he visto para dejar un margen a ambos lados es utilizar "w-11/12" con "m-auto"
    <div className="grid grid-cols-12 gap-4 m-auto w-11/12 font-montserrat row mb-5">
      <Header></Header>
      <Profile persona={persona}></Profile>
      <Card title="Bio" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris enim, vel condimentum risus eget rhoncus, vitae. Viverra pulvinar cras eu ac sed nunc dui. Risus pharetra, lacus interdum quam. Egestas aliquam dui at proin. Amet, pharetra, scelerisque molestie nibh porttitor sem malesuada cursus eget. Orci."></Card>
      <Card title="Personality" list={["Hardworking", "Smart", "Expressive", "Thoughtful"]}></Card>
      <Card title="Pain Points" list={["Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue"]}></Card>
      <Card title="Goals" list={["Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue", "Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue"]}></Card>
    </div>
      
  );
}