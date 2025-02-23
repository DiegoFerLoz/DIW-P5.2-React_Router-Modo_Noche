import NightToggle from "./nightToggle/nightToggle";

interface HeaderProps {
    text?: string;
}

function Header({text="User Persona"}:HeaderProps) {
  // Se trata de un header que contiene dos divs, uno con el texto recibido y otro con el botón de cambio al modo noche.
  // Con "col-start" y "col-end" se establece en qué columnas se va a colocar el elemento (en col-end hay que sumar 1).
  return (
    <div className="flex justify-between items-center py-10 col-start-1 col-end-13">
        <div>
            <h1 className="text-5xl font-bold font-sans text-main-header-light dark:text-main-header-dark">{text}</h1>
            <div className="bg-primary-light dark:bg-primary-dark rounded-2xl py-1 mt-2 w-3/5"></div>
        </div>
        <NightToggle></NightToggle>
    </div>
  )
}

export default Header