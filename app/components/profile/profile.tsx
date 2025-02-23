import type { Persona } from "~/types/persona"
import ProfileLine from "./profileLine/profileLine";

interface ProfileProps {
  persona: Persona;
}

function Profile( {persona}:ProfileProps ) {
  return (
    <div className="bg-profile-bg-light dark:bg-profile-bg-dark rounded-2xl px-6 col-start-1 col-end-5">
      <img src="../../../assets/Rectangle3396.png" alt="Profile photo" className="w-full py-10"/>
      <div>
        <ProfileLine field="Name" value={persona.name}></ProfileLine>
        <ProfileLine field="Age" value={persona.age}></ProfileLine>
        <ProfileLine field="Education" value={persona.education}></ProfileLine>
        <ProfileLine field="Location" value={persona.location}></ProfileLine>
        <ProfileLine field="Job" value={persona.job}></ProfileLine>
        <ProfileLine field="Hobbies" value={persona.hobbies}></ProfileLine>
      </div>
    </div>  
  )
}

export default Profile