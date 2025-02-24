interface CardProps {
    title: string;
    content?: string;
    list?: Array<string>;
}

function Card({title, content="", list=[]}:CardProps) {
  // Componente que recibe un título, y un contenido o lista de elementos. Según lo que reciba, lo mostrará de una forma u otra.
  // Si recibe contenidos y una lista a la vez, mostrará primero el contenido y luego la lista.
  return (
    <div className={`bg-card-bg-light dark:bg-card-bg-dark rounded-2xl p-6 row-auto col-span-12 md:col-span-6 lg:col-span-4`}>
        <h2 className="text-card-h2-light dark:text-card-h2-dark font-bold text-xl dark:text-3xl">{title}</h2>
        {/* Si se ha recibido contenido (es distinto de "", su valor por defecto), se muestra. */}
        {content != "" && <p className="text-card-paragraph-light dark:text-card-paragraph-dark text-xl mt-5">{content}</p>}
        {/* Si se ha recibido una lista (si su longitud es mayor que 0, su valor por defecto es una lista vacía), se muestra. */}
        {list.length > 0 && <ul className="text-card-paragraph-light dark:text-card-paragraph-dark text-xl mt-5">
          {list.map((item, index) => 
            <>
              <li key={index} className="flex items-center">
                <hr className="bg-list-bullet-light dark:bg-list-bullet-dark rounded-2xl py-0.5 w-5 me-2">
                </hr>
                {item}
              </li>
            </>)}
        </ul>}
    </div>
  )
}

export default Card