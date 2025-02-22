import Header from "~/components/header/header";

export function App() {
  return (
    // Sistema de grid de 12 columnas. La mejor forma que he visto para dejar un margen a ambos lados es utilizar "w-11/12" con "m-auto"
    <div className="grid grid-cols-12 gap-4 m-auto w-11/12">
      <Header></Header>
      
    </div>
      
  );
}