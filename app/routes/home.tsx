import type { Route } from "./+types/home";
import { App } from "../app/app";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "P5.2 React Router - Modo Noche" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <App />;
}
