import { useDarkMode } from "../../../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react"; // Importamos los iconos

export default function NightToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="py-2 text-gray-900 rounded-lg flex items-center justify-center gap-2 bg-button-bg-light dark:bg-button-bg-dark w-1/12"
    >
      {theme === "light" ? (
        <>
          <Sun className="w-8 h-8 text-button-text-light"/>
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-8 h-8" />
          <span></span>
        </>
      ) : (
        <>
          <Monitor className="w-8 h-8 text-button-text-light dark:text-button-text-dark" />
          <span></span>
        </>
      )}
    </button>
  );
}