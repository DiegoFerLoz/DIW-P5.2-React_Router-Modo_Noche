import type { Persona } from "~/types/persona"
import ProfileLine from "./profileLine/profileLine";

interface ProfileProps {
  persona: Persona;
  img?: string;
}

function Profile( {persona, img = "../../../assets/Rectangle3396.png"} :ProfileProps ) {
  // Componente que recibe una persona y su imagen, para mostrar sus datos en varias líneas.
  return (
    <div className="bg-profile-bg-light dark:bg-profile-bg-dark rounded-2xl px-6 col-start-1 col-span-12 md:col-span-6 lg:col-span-4 row-span-2 pb-8">
      <img src={img} alt="Profile photo" className="w-full py-10"/>
      <div>
        <ProfileLine field="NAME" value={persona.name}></ProfileLine>
        <ProfileLine field="AGE" value={persona.age}></ProfileLine>
        <ProfileLine field="EDUCATION" value={persona.education}></ProfileLine>
        <ProfileLine field="LOCATION" value={persona.location}></ProfileLine>
        <ProfileLine field="JOB" value={persona.job}></ProfileLine>
        <ProfileLine field="HOBBIES" value={persona.hobbies}></ProfileLine>
      </div>
    </div>  
  )
}

export default Profile