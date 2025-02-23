import Header from "~/components/header/header";
import Profile from "~/components/profile/profile";
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
    <div className="grid grid-cols-12 gap-4 bg-sky-200 m-auto w-11/12">
      <Header></Header>
      <Profile persona={persona}></Profile>
    </div>
      
  );
}