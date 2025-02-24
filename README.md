# P5.2 DISEÑAR CON TAILWIND Y REACT ROUTER UNA PÁGINA RESPONSIVA Y MODO NOCHE

- Autor: Diego Fernández Lozano
- Asignatura: Desarrollo de Interfaces Web
- Curso: S2DAW
- Fecha de entrega: 25/02/2025

## 1. Descripción de la práctica.
Se trata de una práctica donde, siguiendo [un diseño ya realizado en Figma](https://www.figma.com/design/G40Up8aSNvLloXVoi9F1uj/Dark-Mode?node-id=0-18&t=0f4tXEpYE0hBgRAi-1), diseñamos los componentes de la página con React Router de forma responsiva. Adicionalmente, se añade un botón para cambiar del modo "luz" al modo "noche" o al modo "sistema". Esta página se estila con TawilwindCSS.

## 2. Desarrollo de la práctica.
La página se compone principamente de un contenedor grid de 12 columnas, y el resto de componentes seguirán este sistema de columnas.

El primer componente es el **Header**, un contenedor que ocupa las 12 columnas con un título y un botón que cambia el modo de la página. Dicho botón procede del repositorio de [jeatzr](https://github.com/jeatzr/dark-mode-on-ssr-rr) en GitHub.

El siguiente componente es el **Profile**, un contenedor que posee una foto de perfil de la persona, así como sus datos. Se compone a su vez de varias **ProfileLine**, las cuales muestran el nombre del campo junto a su valor.

Y el último componente es la **Card**, un contenedor que muestra un título acompañado de una descripción, o bien una lista de elementos, según el caso.

## 3. Manual de instalación.
Tras realizar un pull o clone del proyecto, es necesario tener **node** instalado en el directorio del proyecto para poder ejecutar la aplicación web. Vamos a instalar node desde la línea de comandos.

1. Instalar node y sus dependencias: 
```bash
npm install
```

2. Después se lanza la página con node:
```bash
npm run dev
```
La aplicación web responderá a la dirección `http://localhost:5173`.

3. Opcionalmente se puede crear una build de la aplicación:
```bash
npm run build
```

## 4. Enlaces de interés.

- [Enlace al diseño inicial en Figma](https://www.figma.com/design/G40Up8aSNvLloXVoi9F1uj/Dark-Mode?node-id=0-18&t=0f4tXEpYE0hBgRAi-1)