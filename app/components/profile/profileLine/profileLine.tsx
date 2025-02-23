interface ProfileLineProps {
    field: string;
    value: string;
}

function ProfileLine({field, value}:ProfileLineProps) {
  // Contenedor flex con dos columnas, una para el nombre del campo y otra para el valor de ese campo.
  return (
    <div className="flex py-2">
        <div className="w-1/2">
            <p className="font-bold text-xl text-card-h2-light dark:text-card-h2-dark">{field}:</p>
        </div>
        <div className="w-1/2">
            <p className="text-xl text-card-paragraph-light dark:text-card-paragraph-dark">{value}</p>
        </div>
        
    </div>
  )
}

export default ProfileLine