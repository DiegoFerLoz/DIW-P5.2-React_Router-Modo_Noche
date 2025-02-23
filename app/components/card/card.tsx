interface CardProps {
    colStart: number;
    colEnd: number;
    title: string;
    content?: string;
    list?: Array<string>;
}

function Card({colStart, colEnd, title, content="", list=[]}:CardProps) {
  // Componente que recibe un título, y un contenido o lista de elementos. Según lo que reciba, lo mostrará de una forma u otra.
  // Si recibe contenidos y una lista a la vez, mostrará primero el contenido y luego la lista.
  return (
    // SIGO CON EL PROBLEMA DE PASAR NÚMEROS CON LAS PROPS. EN ESTE CASO PASA CON LAS COLS DE START Y END.
    <div className={`bg-card-bg-light dark:bg-card-bg-dark rounded-2xl p-6 col-start-${colStart} col-end-${colEnd} row-auto`}>
        <h2 className="text-card-h2-light dark:text-card-h2-dark font-bold text-xl">{title}</h2>
        {/* Si se ha recibido contenido (es distinto de "", su valor por defecto), se muestra. */}
        {content != "" && <p className="text-card-paragraph-light dark:text-card-paragraph-dark text-xl mt-5">{content}</p>}
        {/* Si se ha recibido una lista (si su longitud es mayor que 0, su valor por defecto es una lista vacía), se muestra. */}
        {list.length > 0 && <ul className="text-card-paragraph-light dark:text-card-paragraph-dark text-xl list-discs mt-5">
            {list.map((item, index) => <>
                                            <li key={index} className="flex items-center">
                                                <div className="bg-list-bullet-light dark:bg-list-bullet-dark rounded-2xl py-0.5 w-5 me-2">
                                                </div>
                                                {item}
                                            </li>
                                        </>)}
        </ul>}
    </div>
  )
}

export default Card